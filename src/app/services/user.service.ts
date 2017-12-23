import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IRootState } from '../reducers/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationResponse, IRegistrationForm, RegistrationResponse } from '../interfaces';
import * as log from 'loglevel';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../reducers/user.reducer';


@Injectable()
export class UserService {
  public token: string;
  public locationWhenAuthenticated: string;

  constructor(private http: HttpClient, private store: Store<IRootState>, private router: Router) {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token        = currentUser && currentUser.token;
    } catch (e) {
      log.warn('could not parse currentUser');
    }
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(s => s.user)
    // .filter(user => !user.isAuthPending)
      .map(user => user.isAuthenticated);
  }

  login(name: string, password: string) {
    return this.http.post<AuthenticationResponse>('/api/login', { name, password })
      .map((res: AuthenticationResponse) => {

        this.store.dispatch({ type: LOGIN_SUCCESS, payload: { token: res.token } });

        if (this.locationWhenAuthenticated) {
          this.router.navigateByUrl(this.locationWhenAuthenticated);
          this.locationWhenAuthenticated = '';
        }

        return true;
      });
  }

  logout() {
    this.store.dispatch({ type: LOGOUT_SUCCESS });
  }

  // loginByToken() {
  //   if (this.token) {
  //     this.http.post('/api/loginByToken', { token: this.token })
  //       .map(processLoginResponse.bind(this)).subscribe(
  //       () => 0,
  //       (err) => localStorage.removeItem('currentUser'));
  //   } else {
  //     // return this.store.dispatch({ type: UNAUTHENTICATED });
  //   }
  // }


  register(formData: IRegistrationForm): Observable<any> {
    return this.http.post<RegistrationResponse>('/api/register', formData)
      .map((res: RegistrationResponse) => {
        log.debug(res);
      });
  }
}
