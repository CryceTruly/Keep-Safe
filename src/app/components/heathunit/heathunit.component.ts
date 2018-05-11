import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { Unit } from "../../models/unit";
import { UnitService } from "../../services/unit.service";

@Component({
  selector: "app-heathunit",
  templateUrl: "./heathunit.component.html",
  styleUrls: ["./heathunit.component.css"]
})
export class HeathunitComponent implements OnInit {
  id: string;
  editState: Boolean = false;
  unitToEdit: Unit = null;
  unit1: Observable<Unit>;
  selected: any = 'Mbarara';
  items = ['Mbarara', 'Arua','Bushenyi','Kampala','Masaka','Tororo','Kasese','FortPortal','Bundibugyo',
  'Masindi','Entebbe','Ibanda'];

  unit: Unit = {
    name: '',
    locality: this.selected,
    lat: '-0.6189226',
    lng: '30.6602422',
    updated:Date(),
    description: '',
    province: 'Western',
    open: '',
    phone: '+256',
    photo:''
  };




  private unitDoc: AngularFirestoreDocument<Unit>;
  constructor(private router: ActivatedRoute,private routes:Router, private afs: AngularFirestore,private unitService:UnitService) {}

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this. id = params.get("id");
      this.unitDoc = this.afs.doc<Unit>(`healthunits/${this.id}`);
      setTimeout(() => {
      this.unit1 = this.unitDoc.valueChanges();
      }, 100);
    });
}

editUnit(identifyer:string){
  console.log(identifyer);
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




deleteUnit(event, delid: String){
  this.clearState();
  this.unitService.deleteUnit(delid);

  this.routes.navigate(['/units']);
}

updateItem(id){
  if((this.unit.phone.length)<13){
    Materialize.toast('Phone length is not valid',2000);
    return false;
  }

      if ((this.unit.phone.substring(4, 6)).startsWith("75")|| (this.unit.phone.substring(4, 6)).startsWith("77")
       || (this.unit.phone.substring(4, 6)).startsWith("79")
      || (this.unit.phone.substring(4, 6)).startsWith("74") || (this.unit.phone.substring(4, 6)).startsWith("39") ||
      (this.unit.phone.substring(4, 6)).startsWith("70")
      || (this.unit.phone.substring(4, 6)).startsWith("71") || (this.unit.phone.substring(4, 6)).startsWith("78")
      ) {
      } else {
      Materialize.toast("Phone is not valid",2000);

      return false;
      }

  if((this.unit.description.length)<20){
    Materialize.toast('Please describe the health unit further',2000);
    return false;
  }
  if((this.selected.length)<3){
    Materialize.toast('Please choose a district for health unit',2000);
    return false;
  }

  if((this.unit.name.length)<3){
    Materialize.toast('Please add a name for health unit',2000);
    return false;
  }

  if((this.unit.open.length)<3){
    Materialize.toast('Please add a working time for health unit',2000);
    return false;
  }
  this.updateUnit(id);

}
updateUnit(id: string){
  console.log('updating unit' +id);
  this.unit.locality  = this.selected;
  this.afs.doc(`healthunits/${id}`).update(this.unit).then(function(resolve){
    Materialize.toast('Health Unit updated',3000);
  }).catch(err => Materialize.toast(err,3000));
}



}
