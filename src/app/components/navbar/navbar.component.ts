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

  user: Observable<firebase.User>;
  private authState: any;


name:string;
email:string;
userid:boolean;

//todo rewrite the logic for bool value
  constructor(private auth:AuthService,private router:Router,private afa: AngularFireAuth) {
    // Init Modal
    $('.modal').modal();
    $('.button-collapse').sideNav();
    this.user = this.auth.authUser();

    this.user.subscribe(user => {
      if (user) {
console.log(true);


      } else {
        this.router.navigate(['/login']);
      }
    });


  }
  authUser() {
    return this.user;
  }

  ngOnInit() {
    $('.button-collapse').sideNav();
  $(document).ready(function(){
    $('.dropdown-trigger').dropdown();
  });
  }


  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
