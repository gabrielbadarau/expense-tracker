import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { VerifiedEmailGuard } from './shared/guards/verified-email.guard';

const redirectLoggedInUserToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInUserToDashboard),
  },
  {
    path: 'register',
    component: RegisterComponent,
    ...canActivate(redirectLoggedInUserToDashboard),
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    ...canActivate(redirectLoggedInUserToDashboard),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [VerifiedEmailGuard],
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    canActivate: [VerifiedEmailGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRouting {}
