import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProjectListPage } from './pages/project-list/project-list.page';
import { LoginPage } from './pages/login/login.page';
import { ProjectItemPage } from './pages/project-item/project-item.page';
import { RegisterPage } from './pages/register/register.page';

export const routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'projects', component: ProjectListPage },
  { path: 'project/item/:id', component: ProjectItemPage },
];
