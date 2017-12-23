import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPage } from './register.page';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { UserService } from '../../services/user.service';
import * as root from '../../reducers';
import { of } from 'rxjs/observable/of';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

class MockUserService extends UserService {
  isAuthenticated() {
    return of(false);
  }
}

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports     : [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        StoreModule.forRoot(root.reducer, { initialState: root.initialState, metaReducers: root.metaReducers }),
      ],
      providers   : [ { provide: UserService, useClass: MockUserService } ],
    }).compileComponents();

    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('initial form is empty and therefore invalid ', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
});
