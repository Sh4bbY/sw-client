import { AfterViewInit, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as log from 'loglevel';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { routeAnimation } from '../../animations/route.animation';

@Component({
  animations : [ routeAnimation ],
  templateUrl: './login.page.html',
  styleUrls  : [ './login.page.scss' ],
})
export class LoginPage implements OnInit, AfterViewInit {
  @HostBinding('@routeAnimation') routeAnimation: any;
  @ViewChild('loginForm') loginForm: NgForm;

  isLoading: boolean;
  model: { email: string, password: string };
  responseError: string;

  formError     = {
    email   : '',
    password: '',
  };
  validationMsg = {
    email   : {
      required : 'Email is required.',
      maxlength: 'Name must be less than 60 characters long.',
      pattern  : 'Email must be valid',
    },
    password: {
      required : 'Password is required.',
      minlength: 'Password must be at least 5 characters long.',
    },
  };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.isLoading     = false;
    this.responseError = null;
    this.model         = {
      email   : 'test@test.de',
      password: 'test123',
    };
  }

  ngAfterViewInit() {
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.userService.login(this.model.email, this.model.password)
        .subscribe((result: boolean) => {
          this.responseError = '';
          this.isLoading     = false;
        }, (res: HttpErrorResponse) => {
          this.responseError = res.error;
          this.isLoading     = false;
        });
    } else {
      log.warn('form is invalid');
    }
  }

  onValueChanged(data: any) {

    Object.keys(this.formError).forEach(field => {
      // clear previous error message (if any)
      this.formError[ field ] = '';

      const control = this.loginForm.form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMsg[ field ];
        Object.keys(control.errors).forEach(key => {
          this.formError[ field ] += messages[ key ] + ' ';
        });
      }
    });
  }
}
