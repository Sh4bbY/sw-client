import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material';
import { UserService } from './services/user.service';
import { StoreModule } from '@ngrx/store';
import * as root from './reducers';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        UserMenuComponent,
      ],
      imports     : [
        MatToolbarModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(root.reducer, { initialState: root.initialState, metaReducers: root.metaReducers }),
      ],
      providers   : [ UserService ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
