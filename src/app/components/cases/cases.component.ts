import { TimeAgo } from './../../utils/Time';
import { Case } from './../../models/Case';
import { Component, OnInit,OnChanges } from '@angular/core';
import { UnitService } from '../../services/unit.service';



@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
cases:Case[];
  constructor(private unitService :UnitService,private time:TimeAgo) { }

  ngOnInit() {
    this.unitService.getReportedCases().subscribe(cases=>{
      this.cases=cases;
      console.log(cases);
    });
  }

  OnChanges(){
    console.log('ONCHANGES RAN WHERE DOES IT EVEN RUN ');
    this.unitService.getReportedCases();
  }

}
