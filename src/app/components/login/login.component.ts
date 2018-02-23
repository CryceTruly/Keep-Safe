import { Observable } from 'rxjs/Observable';
import { User } from './../../models/User';
import { Router, Routes } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:'';
  password:''


private user: Observable<firebase.User>;
private authState: any;

authUser() {
  return this.user;
}
        

  constructor(private authServic:AuthService,private router:Router,private afa: AngularFireAuth) { 
    this.user=afa.authState;
    this.user = this.authUser();
      this.user.subscribe(user => {
        if(user.uid.length>0){
this.router.navigate(['dashboard']).catch(err=>{
console.log(err);}
);
        }else{
          this.router.navigate(['/login']);
        }
       
        
        });
  }

  ngOnInit() {
console.log('onit');
    $('.preloader').hide();
    $('.test').hide();
  }


  checkUserSignIn(){
    if((this.email.length)==0){
      Materialize.toast('Email is required',2000);
      return;
          }
    if((this.email.length)<7){
Materialize.toast('Email length not accepted',2000);
return;
    }
    if((this.password.length)==0){
      Materialize.toast('Password is required',2000);
      return;
          }
    if((this.password.length)<8){
      Materialize.toast('Password length not accepted,should be atleast 8 characters',2000);
      return;
          }
          $('.preloader').show();
this.authServic.login(this.email,this.password).catch(e=>{
  console.log(e);
  $('.preloader').hide();
  Materialize.toast('Cant log in '+e,3000);

  return;
}).then(e=>{
  $('.preloader').hide();
console.log('hello');
});
          console.log(1);
  
  }


  modifyPassword(){
    $('.card1').fadeOut('slow');
    $('.test').fadeIn('fast');
  }


  hideMe(){
    $('.test').fadeOut('slow');
    $('.card1').fadeIn('fast');
  }

  sendPasswordResetEmail(){
    if((this.email.length)==0){
      Materialize.toast('Email is required',2000);
      return;
          }
    if((this.email.length)<7){
Materialize.toast('Email length not accepted',2000);
return;
    }

    console.log(1);
    this.authServic.requestPasswordReset(this.email);
   
  }
}
