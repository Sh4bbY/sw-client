import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import * as root from '../../reducers';
import { UserService } from '../../services/user.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports     : [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        StoreModule.forRoot(root.reducer, { initialState: root.initialState, metaReducers: root.metaReducers }),
      ],
      providers   : [ UserService ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('initial form is empty and therefore invalid ', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
});
