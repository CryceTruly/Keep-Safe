import { Observable } from 'rxjs/Observable';
import { Consellor } from './../../models/Consellor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitService } from '../../services/unit.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-consellor',
  templateUrl: './consellor.component.html',
  styleUrls: ['./consellor.component.css']
})
export class ConsellorComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private unitService: UnitService,private routers:Router,
    private afs: AngularFirestore) { }
    id: string;
    consellor: Observable<Consellor>;
    ready: boolean = false;
    private ConsellorDoc: AngularFirestoreDocument<Consellor>;
    editState:boolean=false;
     councillorToEdit:Consellor=null;
  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.id = id.get("id");
      this.ConsellorDoc= this.afs.doc<Consellor>(`counsellors/${this.id}`);
      setTimeout(() => {
        this.ready=true;
      this.consellor = this.ConsellorDoc.valueChanges();
      },0);
    });
  }
  deleteConsellor(event,consellor){
    this.clearState();
    this.ConsellorDoc.delete().then(resolve=>{
      Materialize.toast('Consellor removed',2000);
      this.routers.navigate(['/councillors']);

    }).catch(err=>{

    });
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
