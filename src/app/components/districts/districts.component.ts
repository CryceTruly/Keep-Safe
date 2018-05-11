import { District } from './../../models/District';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { UnitService } from '../../services/unit.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {
   districts=[
    {id:1,name:'Mbarara'},
    {id:2,name:'Kampala'},
    {id:3,name:'Bushenyi'},
    {id:4,name:'Masaka'},
    {id:5,name:'Kasese'},
    {id:6,name:'FortPortal'},
    {id:7,name:'Rubirizi'},
    {id:8,name:'Ntungamo'},
    {id:9,name:'Isingiro'},
    {id:10,name:'Mubende'},
    {id:11,name:'Hoima'},
    {id:12,name:'Masaka'}
  ];



  constructor(private unitService:UnitService,private db: AngularFireDatabase) {
    // this.names=this.db.list('/districts', ref => ref.orderByChild('name')).valueChanges();
  }

  ngOnInit() {
  }
  fetchVillagesFromDistrict(district:string){

  }
  populatevillages(name:string){
    this.unitService.getVillages(name);
  }
}
