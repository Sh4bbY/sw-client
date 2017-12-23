import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as root from '../../reducers';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports     : [
        MatToolbarModule,
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(root.reducer, { initialState: root.initialState, metaReducers: root.metaReducers }) ],
      providers   : [ UserService ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
