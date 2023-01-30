import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

import { defer, Observable, tap } from 'rxjs';

import { LoginData } from '../model/login-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uid = '';
  displayName = '';
  email = '';
  emailVerified!: boolean;

  sendVerificationEmail$!: Observable<void | undefined>;

  constructor(private auth: AngularFireAuth) {}

  initiateUserInfo(): Observable<firebase.default.User | null> {
    return this.auth.user.pipe(tap((user) => this.setUserInfo(user)));
  }

  login({ email, password }: LoginData): Observable<firebase.default.auth.UserCredential> {
    return defer(() => this.auth.signInWithEmailAndPassword(email, password)).pipe(
      tap((auth) => this.setUserInfo(auth.user))
    );
  }

  register({ email, password }: LoginData): Observable<firebase.default.auth.UserCredential> {
    return defer(() => this.auth.createUserWithEmailAndPassword(email, password)).pipe(
      tap((auth) => this.setUserInfo(auth.user))
    );
  }

  setPersistenceLocal(): Observable<void> {
    return defer(() => this.auth.setPersistence('local'));
  }

  sendPasswordResetEmail(email: string): Observable<void> {
    return defer(() => this.auth.sendPasswordResetEmail(email, { url: 'https://expensetracker-bd.web.app/login' }));
  }

  logout(): Observable<void> {
    return defer(() => this.auth.signOut());
  }

  setUserInfo(user: firebase.default.User | null): void {
    this.uid = user?.uid ?? '';
    this.displayName = user?.displayName ?? '';
    this.email = user?.email ?? '';
    this.emailVerified = user?.emailVerified ?? false;

    this.sendVerificationEmail$ = defer(async () =>
      user?.sendEmailVerification({ url: 'https://expensetracker-bd.web.app/login' })
    );
  }
}
