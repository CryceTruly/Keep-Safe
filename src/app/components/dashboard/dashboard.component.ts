import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UnitService } from "../../services/unit.service";
import * as firebase from "firebase/app";
import { Chart } from "chart.js";
import * as _ from "lodash";
import { AngularFirestore } from "angularfire2/firestore";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  wnumber;
  cnumber;
  snumber;
  enumber;
  nnumber;

  njan;
  nfeb;
  nmar;
  napril;
  nmay;
  njune;
  njuly;
  naug;
  nsept;
  noct;
  nnov;
  ndec;

  @ViewChild("chart") el: ElementRef;

  @ViewChild("pie") els: ElementRef;

  unitcount: number;
  casecount: number;
  consellorcount: number;
  myPieChart: any;
  user: Observable<firebase.User>;
  private authState: any;
  constructor(
    private unitService: UnitService,
    private afa: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    this.casecount = 0;
    this.consellorcount = 0;
    this.unitcount = 0;

    this.user = this.authUser();
    //console.log(1);
    this.user = afa.authState;
    this.user = this.authUser();
    this.user.subscribe(user => {});
  }
  authUser() {
    return this.user;
  }

  ngOnInit() {
    const ref = this.firestore.collection("cases");


      ref.ref.where("province", "==", "Eastern Region").onSnapshot(snap2 => {
        this.enumber = snap2.size;
        ref.ref.where("province", "==", "Western Region").onSnapshot(snap => {
          this.wnumber = snap.size;

    this.basicPieChart(this.wnumber);
      });

    });
    ref.ref.where("province", "==", "Central Region").onSnapshot(cnap => {
      this.cnumber = cnap.size;
    });
    ref.ref.where("province", "==", "Northern Region").onSnapshot(snap => {
      this.nnumber = snap.size;
    });


    ref.ref.where("province", "==", "Southern Region").onSnapshot(snap => {
      this.snumber = snap.size;
    });

    ref.ref.where('month', '==', '01').onSnapshot(snap => {
      this.njan = snap.size;
     });

     ref.ref.where("month", "==", "02").onSnapshot(snap => {
       this.nfeb = snap.size;
     });

     ref.ref.where("month", "==", "03").onSnapshot(snap => {
       this.nmar = snap.size;
     });

     ref.ref.where("month", "==", "04").onSnapshot(snap => {
       this.napril = snap.size;
     });
     ref.ref.where("month", "==", "05").onSnapshot(snap => {
      this.nmay = snap.size;

      this.basicChart(this.nmay);
    });

    $('.button-collapse').sideNav();
    this.geCaseCount();
    this.getConsellorCount();
    this.getUnitsCount();
  }
  getUnitsCount(): number {
    this.firestore.collection('healthunits').valueChanges().subscribe(units => {
      this.unitcount = units.length;
    });
    return this.unitcount;
  }

  geCaseCount() {
    this.firestore.collection('cases').valueChanges().subscribe(cases => {
      this.casecount = cases.length;
    });
  }

  getConsellorCount() {
    this.firestore.collection('counsellors').valueChanges().subscribe(c => {
      this.consellorcount = c.length;
    });
  }

  basicChart(n) {

    const ref = this.firestore.collection('cases');
    ref.valueChanges().subscribe(c=>{
      c.map(function(a) {

      });


    });

    const element = this.el.nativeElement;
  //console.log(january,february,march,april);
    const data = [
      {
        x: ["January", "February", "March", "April","May"],
        y: [0, 0,0, 30, n]
      }
    ];
    const style = {
      title: "All reported Cases by May 2018",
      margin: { t: 30 }
    };

    Plotly.plot(element, data, style);
  }

  basicPieChart(num1) {
 console.log('numbers '+num1);
    const element = this.els.nativeElement;
    const data = [
      {
        values: [num1,0,0,0,0],

        labels: [
          "Western Uganda",
          "Southern Uganda",
          " Northern Uganda",
          "Eastern Uganda",
          "Central Uganda"
        ],
        type: "pie"
      }
    ];
    const style = {
      title: "Regional Reported Cases January-May 2018",
      margin: { t: 30 }
    };
    Plotly.plot(element, data, style);
  }
}
