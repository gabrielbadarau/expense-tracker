import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

import { defer, tap } from 'rxjs';

import { LoginData } from '../model/login-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uid = '';

  getUser$ = this.auth.user.pipe(tap((user) => (this.uid = user?.uid as string)));

  constructor(private auth: AngularFireAuth) {}

  login({ email, password }: LoginData) {
    return defer(() => this.auth.signInWithEmailAndPassword(email, password));
  }

  register({ email, password }: LoginData) {
    return defer(() => this.auth.createUserWithEmailAndPassword(email, password));
  }

  setPersistenceLocal() {
    return defer(() => this.auth.setPersistence('local'));
  }

  sendPasswordResetEmail(email: string) {
    return defer(() => this.auth.sendPasswordResetEmail(email, { url: 'https://expensetracker-bd.web.app/login' }));
  }

  logout() {
    return defer(() => this.auth.signOut());
  }
}
