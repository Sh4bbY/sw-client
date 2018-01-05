import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/take';
import * as log from 'loglevel';
import { routeAnimation } from '../../animations/route.animation';

@Component({
  animations : [ routeAnimation ],
  templateUrl: './register.page.html',
  styleUrls  : [ './register.page.scss' ],
})
export class RegisterPage implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: any;

  model: any;
  registerForm: FormGroup;
  responseError      = '';
  formErrors         = {
    username        : '',
    email           : '',
    password        : '',
    password_confirm: '',
  };
  validationMessages = {
    username           : {
      required : 'Username is required.',
      minlength: 'Username must be at least 4 characters long.',
      maxlength: 'Username cannot be more than 24 characters long.',
    },
    email              : {
      required: 'Email is required.',
      pattern : 'Email must be valid',
    },
    password           : {
      required : 'Password is required.',
      minlength: 'Password must be at least 6 characters long.',
    },
    password_confirm   : {
      required: 'Password confirmation is required.',
    },
    mismatchedPasswords: 'Passwords need to match',
  };

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.model = {
      username        : 'test',
      email           : 'test@test.de',
      password        : 'test123',
      password_confirm: 'test123',
    };
  }

  ngOnInit() {
    this.userService.isAuthenticated().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigateByUrl('/');
      }
      this.buildForm();
    });
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      username        : [ this.model.username, [
        Validators.required, Validators.minLength(4), Validators.maxLength(24) ],
      ],
      email           : [ this.model.email, Validators.pattern(/[\w-_\.]+@(?:[\w]+\.)+([a-zA-Z]{2,4})/) ],
      password        : [ this.model.password, Validators.minLength(6) ],
      password_confirm: [ this.model.password_confirm ],
    }, { validator: matchingPasswords('password', 'password_confirm') });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) {
      return;
    }

    const form = this.registerForm;

    Object.keys(this.formErrors).forEach(field => {
      this.formErrors[ field ] = '';
      const control            = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[ field ];
        Object.keys(control.errors)
          .forEach(key => this.formErrors[ field ] += messages[ key ] + '');
      }
      if (form.hasError('mismatchedPasswords')) {
        this.formErrors.password_confirm = this.validationMessages.mismatchedPasswords;
        form.get('password_confirm').setErrors([ 'mismatchedPasswords' ]);
      }
    });
  }

  submit() {
    if (!this.registerForm.valid) {
      log.warn('form is not valid');
      return;
    }

    this.userService.register(this.registerForm.value).subscribe(
      () => this.router.navigateByUrl('/'),
      (err) => this.handleServerError(err),
    );
  }

  handleServerError(err: any) {
    switch (err.status) {
      case 406:
        return this.responseError = 'your username or email-address is already being used';
      case 400:
      default:
        return this.responseError = 'something went wrong';
    }
  }
}

function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: any): { [key: string]: any } => {
    const password        = group.controls[ passwordKey ];
    const confirmPassword = group.controls[ confirmPasswordKey ];

    if (password.value !== confirmPassword.value) {
      return { mismatchedPasswords: true };
    }
  };
}
