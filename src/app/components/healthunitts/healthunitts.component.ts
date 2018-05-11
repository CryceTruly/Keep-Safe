import { UnitService } from './../../services/unit.service';
import { Component, OnInit } from '@angular/core';
import { Unit } from '../../models/Unit';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-healthunitts',
  templateUrl: './healthunitts.component.html',
  styleUrls: ['./healthunitts.component.css']
})
export class HealthunittsComponent implements OnInit {
  units: Unit[];
  editState:boolean=false;
unitToEdit:Unit=null;

  constructor(private unitService: UnitService,private us:AngularFirestore) { }

  ngOnInit() {
    $('.modal').modal();


    this.us.collection('healthunits').valueChanges().subscribe(units=>{
      this.units = units;
    });






    this.us.collection('healthunits').valueChanges().subscribe(units=>{
      this.units = units;
      console.log(units);
      if(units.length<1){
        $('.preloader').attr('hidden','hidden');
        console.log('there are no units');
Materialize.toast('There are no health clinics yet',5000);
      } else{
        console.log(units);
        $('.preloader').hide('fast', function () {
          console.log('hidden preloader');
        });
      }


    });
  }
  tooglestate(unit){
    this.editState=true;
    this.unitToEdit=unit;
  }
  editHealthUnit(event,unit){
   this.unitService.updateUnit(unit);
   this.clearState();
  }
  clearState(){
    this.editState=false;
    this.unitToEdit=null;
  }





}
