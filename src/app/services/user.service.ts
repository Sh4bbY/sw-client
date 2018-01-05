import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IRootState } from '../reducers/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationResponse, IRegistrationForm, RegistrationResponse } from '../interfaces';
import * as log from 'loglevel';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, UNAUTHENTICATED } from '../reducers/user.reducer';


@Injectable()
export class UserService {
  public token: string;
  public locationWhenAuthenticated: string;

  constructor(private http: HttpClient, private store: Store<IRootState>, private router: Router) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      this.token = user && user.token;
    } catch (e) {
      log.warn('could not parse localStorage.user');
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

        this.store.dispatch({ type: LOGIN_SUCCESS, payload: res });
        localStorage.setItem('user', JSON.stringify({ token: res.token }));

        if (this.locationWhenAuthenticated) {
          this.router.navigateByUrl(this.locationWhenAuthenticated);
          this.locationWhenAuthenticated = '';
        } else {
          this.router.navigateByUrl('/');
        }

        return true;
      });
  }

  logout() {
    return this.http.get('/api/logout')
      .subscribe((res: any) => {
        this.store.dispatch({ type: LOGOUT_SUCCESS });
        return true;
      });
  }

  tokenLogin() {
    if (this.token) {
      this.http.post('/api/token-login', { token: this.token }).subscribe(
        (result) => {
          log.info('token-login: ', result);
          this.store.dispatch({ type: LOGIN_SUCCESS, payload: result});
        },
        (err) => localStorage.removeItem('user'));
    } else {
      return this.store.dispatch({ type: UNAUTHENTICATED });
    }
  }


  register(formData: IRegistrationForm): Observable<any> {
    return this.http.post<RegistrationResponse>('/api/register', formData)
      .map((res: RegistrationResponse) => {
        log.debug(res);
      });
  }
}
