import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { UnitService } from '../../services/unit.service';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
unitcount:number;
casecount:number;
consellorcount:number;
user:Observable< firebase.User>;
private authState: any;
  constructor(private unitService:UnitService,private auth:AngularFireAuth,private router:Router) {
    this.casecount=0;
    this.consellorcount=0;
    this.unitcount=0;
    this.user=this.auth.authState;
    this.user = this.authUser();
    console.log(1);
    this.user.subscribe(user=>{
if(user==null){
this.router.navigate(['/login']);
}
    });

   }
   authUser() {
    return this.user;
  }

   

  ngOnInit() {
    
     $('.button-collapse').sideNav();
     this.geCaseCount();
     this.getConsellorCount();
     this.getUnitsCount();
  }
getUnitsCount():number{
  this.unitService.units.subscribe(units=>{
    this.unitcount=units.length;
    });
  return this.unitcount;
}

geCaseCount():number{
this.unitService.cases.subscribe(cases=>{
this.casecount=cases.length;
});
  return this.casecount;
}

getConsellorCount():number{
  this.unitService.consellors.subscribe(c=>{
    this.consellorcount=c.length;

  });


  return this.consellorcount;
}
}
