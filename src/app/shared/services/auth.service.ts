import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

import { from } from 'rxjs';

import { LoginData } from '../model/login-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  login({ email, password }: LoginData) {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  register({ email, password }: LoginData) {
    return from(this.auth.createUserWithEmailAndPassword(email, password));
  }

  logout() {
    return from(this.auth.signOut());
  }

  getUser() {
    return this.auth.user;
  }

  async updateDisplayName() {
    // return (await this.auth.currentUser)?.updateProfile();
  }
}
