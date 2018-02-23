import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { User } from './../../models/User';
import { FormsModule } from '@angular/forms';
import { AddhealthunitComponent } from './../addhealthunit/addhealthunit.component';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appName = 'KeepSafe';

  private user: Observable<firebase.User>;
  private authState: any;


name:string;
email:string;
userid:boolean;

//todo rewrite the logic for bool value
  constructor(private auth:AuthService,private router:Router,private afa: AngularFireAuth) {
    // Init Modal
    $('.modal').modal();
    $('.button-collapse').sideNav();
    this.user = afa.authState;
    this.user = this.authUser();
      this.user.subscribe(user => {
        if(user.uid.length>0){

        this.userid=true;
        }else{
          this.userid=false;
          this.router.navigate(['/login']);
        }
       
        
        });
        

  }
  authUser() {
    return this.user;
  }

  ngOnInit() {
      // Init Modal
      $('.modal').modal();
    $('.button-collapse').sideNav();
  }


  logout(){
    this.auth.logout();
  }
}
