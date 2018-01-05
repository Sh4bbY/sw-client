import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuComponent } from './user-menu.component';
import { StoreModule } from '@ngrx/store';
import * as root from '../../reducers/index';
import { UserService } from '../../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenuComponent ],
      imports     : [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(root.reducer, { initialState: root.initialState, metaReducers: root.metaReducers }),
      ],
      providers   : [ UserService ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
