import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-cnavbar',
  templateUrl: './councillornavbar.component.html',
  styleUrls: ['./councillornavbar.component.css']
})
export class CouncillornavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  userEmail: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
