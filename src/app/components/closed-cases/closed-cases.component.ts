import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Case } from '../../models/Case';

@Component({
  selector: 'app-closed-cases',
  templateUrl: './closed-cases.component.html',
  styleUrls: ['./closed-cases.component.css']
})
export class ClosedCasesComponent implements OnInit {
cases: any[];
  constructor(private afs: AngularFirestore) {
 this.afs.collection('closed_cases').valueChanges().subscribe(cases=>{
this.cases = cases;
console.log(this.cases);
    });

   }

  ngOnInit() {

  }

}
