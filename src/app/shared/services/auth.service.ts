import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

import { from } from 'rxjs';

import { LoginData } from '../model/login-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUser$ = this.auth.user;

  constructor(private auth: AngularFireAuth) {}

  login({ email, password }: LoginData) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register({ email, password }: LoginData) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }
}
