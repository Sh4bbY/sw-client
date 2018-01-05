import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { routes } from './app.routes';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { LoginPage } from './pages/login/login.page';
import { ProjectListPage } from './pages/project-list/project-list.page';
import { ProjectItemPage } from './pages/project-item/project-item.page';
import { RegisterPage } from './pages/register/register.page';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserService } from './services/user.service';
import { StoreModule } from '@ngrx/store';
import * as root from './reducers/index';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardPage,
    LoginPage,
    ProjectListPage,
    ProjectItemPage,
    RegisterPage,
    FavoritesComponent,
    UserMenuComponent,
  ],
  imports     : [
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(root.reducer, { initialState: root.initialState, metaReducers: root.metaReducers }),
  ],
  providers   : [
    UserService,
    AuthGuard,
  ],
  bootstrap   : [ AppComponent ],
})
export class AppModule {
}
