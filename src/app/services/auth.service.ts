import { Consellor } from './../models/Consellor';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  Consellor: Observable<Consellor[]>;
  consellorDoc: AngularFirestoreDocument<Consellor>;
uid;
  consellorsCollection: AngularFirestoreCollection<Consellor>;
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {
    this.consellorsCollection = db.collection<Consellor>('counsellors');
      this.user = afAuth.authState;
    }

    authUser() {
      return this.user;
    }

    get currentUserId(): string {
      this.user = this.authUser();
      this.user.subscribe(user => {
         this.uid= user.uid; });
        return this.uid;
    }

    login(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user;
          //this.setUserStatus('online');
          this.router.navigate(['']);
        });
    }

    logout() {
      console.log('loging out user');
      this.afAuth.auth.signOut();
      this.router.navigate(['login']);
    }

    // signUp(email: string, gender:string, password: string, displayName: string,description:string,photo:string) {
    //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    //           .then((user) => {
    //             console.log('councillor created');
    //             this.authState = user;
              
    //           }).catch(err=>{
    //             console.log(err);

    //             Materialize.toast(err,6000);
    //             return false;

    //           });
              
    // }

    setUserData(councillor:Consellor): void {
      console.log('setting user data');
      const path = `councillors/${this.currentUserId}`;
this.consellorsCollection.doc(this.currentUserId).set(councillor)
        .catch(error => console.log(error)).then((e)=>{
            Materialize.toast("Councillor added",5000);
          this.router.navigate(['/', 'dashboard']).then(nav => {
            console.log(nav); // true if navigation is successful
          }, err => {
            console.log(err) // when there's an error
          });
           
        });
    }

    requestPasswordReset(email:string){
    this.afAuth.auth.sendPasswordResetEmail(email).then((e)=>{
    Materialize.toast('password reset email sent to '+email,2000);
    }).catch(err=>{
      Materialize.toast('An error occured: '+err,2000 );
    });
    }
}
