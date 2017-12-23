import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as log from 'loglevel';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login.page.html',
  styleUrls  : [ './login.page.scss' ],
})
export class LoginPage implements OnInit, AfterViewInit {
  @ViewChild('loginForm') loginForm: NgForm;

  isLoading: boolean;
  model: { username: string, password: string };
  responseError: string;

  formError     = {
    username: '',
    password: '',
  };
  validationMsg = {
    username: {
      required : 'Name is required.',
      minlength: 'Name must be at least 4 characters long.',
      maxlength: 'Name cannot be more than 24 characters long.',
    },
    password: {
      required : 'Password is required.',
      minlength: 'Password must be at least 5 characters long.',
    },
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.isLoading     = false;
    this.responseError = null;
    this.model         = {
      username: 'test',
      password: 'test1',
    };
  }

  ngAfterViewInit() {
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.userService.login(this.model.username, this.model.password)
        .subscribe((result: boolean) => {
          this.responseError = '';
          this.isLoading     = false;
          this.router.navigateByUrl('/');
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
