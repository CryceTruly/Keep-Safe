import { TimeAgo } from './../../utils/Time';
import { Case } from './../../models/Case';
import { Component, OnInit,OnChanges } from '@angular/core';
import { UnitService } from '../../services/unit.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
cases: Case[];
  constructor(private unitService:UnitService,private afs:AngularFirestore, private time:TimeAgo) { }

  ngOnInit() {
   this.afs.collection('cases').valueChanges().subscribe(changes => {
      this.cases = changes;
    });




    // this.unitService.getReportedCases().subscribe(cases=>{
    //   this.cases=cases;
    //   console.log(cases);
    //    setTimeout(() => {
    //     this.unitService.getReportedCases().subscribe(c=>{
    //     console.log(c);
    //     });
    //   }, 1000);
    // });
  }

  OnChanges(){
    console.log('ONCHANGES RAN WHERE DOES IT EVEN RUN ');
    this.unitService.getReportedCases();
  }

}
