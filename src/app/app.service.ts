import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AppService {
  user: Observable<firebase.User>;
  public userData: EventEmitter<any> = new EventEmitter();
  isAuth = false;
  authColor= 'warn';
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  login(from: string) {
   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   this.changeState(this.user);
   this.userData.emit(this.user);
  }
  logout() {
    this.afAuth.auth.signOut();
    this.isAuth = false;
      this.authColor = 'warn';
      this.userData.emit({});
  }

private changeState(user: any = null) {
    if(user) {
      this.isAuth = true;
      this.authColor = 'primary';
      user.subscribe(
        data => {
          this.userData.emit(data);
        }
      );
    }
    else {
      this.isAuth = false;
      this.authColor = 'warn';
      this.userData.emit({});
    }
  }
}
