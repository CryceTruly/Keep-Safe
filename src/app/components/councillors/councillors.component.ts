import { Router } from '@angular/router';
import { Consellor } from './../../models/Consellor';
import { UnitService } from './../../services/unit.service';
import { Component, OnInit, OnChanges } from '@angular/core';



@Component({
  selector: 'app-councillors',
  templateUrl: './councillors.component.html',
  styleUrls: ['./councillors.component.css']
})
export class CouncillorsComponent implements OnInit {
consellors:Consellor[];
editState:boolean=false;
councillorToEdit:Consellor=null;
  constructor(private unitService:UnitService,private router:Router) { }

  ngOnInit() {

    this.unitService.getConsellors().subscribe(consellors=> {
      this.consellors = consellors;
      console.log(consellors);
      if(consellors.length<1){
        $('.preloader').attr('hidden','hidden');
        console.log('there are no consellors');
Materialize.toast('There are no Consellors yet',5000);
      }else{
        console.log(consellors);
        $('.preloader').hide('fast', function () {
          console.log('hidden preloader');
        });
      }
      
     
    });
  }
  OnChanges(){
    this.unitService.getConsellors().subscribe(consellors=> {
      this.consellors = consellors;
      console.log(consellors);
      if(consellors.length<1){
        $('.preloader').attr('hidden','hidden');
        console.log('there are no consellors');
Materialize.toast('There are no Consellors yet',5000);
      }else{
        console.log(consellors);
        $('.preloader').hide('fast', function () {
          console.log('hidden preloader');
        });
      }
      
     
    });

  }
  navigateToDetail(id:String){
    console.log(id);
 
this.router.navigate([`/councillor/${id}`]);
  }

  deleteConsellor(event,consellor){
    this.clearState();
    this.unitService.deleteConsellor(consellor);
  }
  tooglestate(consellor){
    this.editState=true;
    this.councillorToEdit=consellor;
  }

  updateConsellor(consellor:Consellor){

    this.unitService.updateCounsellor(consellor);
    this.clearState();
  }

  clearState(){
   
    this.editState = false;
    this.councillorToEdit = null;
    console.log('clearing'); 

    console.log(this.editState,this.councillorToEdit);
  }
}




