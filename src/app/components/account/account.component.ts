import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { auth } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 email:string;
 user:any;
userId:string;
  constructor(private auth:AuthService,private router:Router,private afa:AngularFireAuth) {
    this.user=afa.authState;
     this.user = this.authUser();
       this.user.subscribe(user => {
         if(user.uid.length>0){
this.email=user.email;
this.userId=user.uid;

        }else{
          this.logout();
        }
      });


  }

  ngOnInit() {
  }



  logout(){
  this.afa.auth.signOut().then(e=>{
    this.router.navigate(['login']);

  }).catch(err=>{
    console.log(err);
  });

}



 authUser() {
  return this.user;
}

}
