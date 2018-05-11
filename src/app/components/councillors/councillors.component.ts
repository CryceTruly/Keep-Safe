import { AngularFirestore } from 'angularfire2/firestore';
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
  constructor(private unitService:UnitService,private fs:AngularFirestore, private router:Router) { }

  ngOnInit() {
    this.fs.collection('counsellors').valueChanges().subscribe(vals => {
this.consellors = vals;
 console.log(vals);
      if(vals.length < 1){
        $('.preloader').attr('hidden','hidden');
        console.log('there are no consellors');
Materialize.toast('There are no Consellors yet',5000);
      }else{
        console.log(vals);
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


}




