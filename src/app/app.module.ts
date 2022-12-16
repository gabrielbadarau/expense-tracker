import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { IconRegistryModule } from './modules/icon-registry-module/icon-registry.module';
import { MaterialModule } from './modules/material-module/material.module';
import { DomPortalModule } from './shared/components/dom-portal/dom-portal.module';
import { SnackBarComponentModule } from './shared/components/snackbar/snackbar.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, ResetPasswordComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRouting,
    IconRegistryModule,
    MaterialModule,
    ReactiveFormsModule,
    DomPortalModule,
    SnackBarComponentModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
