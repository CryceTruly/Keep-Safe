import { Router } from '@angular/router';
import { Country } from './../models/Country';
import { Case } from './../models/Case';
import { Consellor } from './../models/Consellor';
import { Unit } from './../models/unit';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { database } from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class  UnitService {
  healthUnitCollection: AngularFirestoreCollection<Unit>;
  consellorsCollection: AngularFirestoreCollection<Consellor>;
  casesCollection:AngularFirestoreCollection<Case>;
  units: Observable<Unit[]>;
  cases:Observable<Case[]>;
  case: Case;
  consellors:Observable<Consellor[]>;
  healthUnitDoc: AngularFirestoreDocument<Unit>;
  consellorDoc: AngularFirestoreDocument<Consellor>;
  casesDoc:AngularFirestoreDocument<Case>;
  constructor(public us: AngularFirestore,private db:AngularFireDatabase,private router:Router) {
    //  this.Units = this.us.collection('healthunits').valueChanges();

    this.healthUnitCollection = this.us.collection('healthunits');

    //the cosellor reference
    this.consellorsCollection = us.collection<Consellor>('counsellors');


    //cases raference
    this.casesCollection=us.collection<Case>('cases');

    this.units = this.us.collection('healthunits').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Unit;
        data.id = a.payload.doc.id;
        console.log(data.id);
        console.log(data);
        return data;
      });
    });

    this.cases = this.us.collection('cases').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Case;
        data.id = a.payload.doc.id;
        console.log(data.id);
        console.log(data);
        return data;
      });
    });


    this.consellors = this.us.collection('counsellors').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Consellor;
        data.id = a.payload.doc.id;
        console.log(data.id);
        console.log(data);
        return data;
      });
    });




  }


  // getConsellors(){
  //   console.log('fetching consellors');
  //   return this.Consellor;
  // }


  getUnits() {
    return this.units;
  }
  addHealthUnit(unit: Unit) {
    const id = this.us.createId();
    unit.id = id;
    console.log('submitting ........');
    this.us.collection('healthunits').doc(id).set(unit).then(e => {
      console.log('Health Unit has been added');
      Materialize.toast('Health Unit added',2000);
      this.router.navigate(['units']).catch(err=>console.log(err));
    }).catch(err => {
      console.log('Unit was not added ' + err);
    });
  }

  updateUnit(unit:Unit){
    console.log('updating unit'+unit.name);
    this.healthUnitDoc=this.us.doc(`healthunits/${unit.id}`);
    this.healthUnitDoc.update(unit).then(function(resolve){
      Materialize.toast('Health Unit updated',3000);
    }).catch(err=>Materialize.toast(err,3000));


  }
  deleteUnit(unit: String) {
    console.log('deleting unit');
    this.healthUnitDoc = this.us.doc(`healthunits/${unit}`);
    this.healthUnitDoc.delete().then(fun => {
      console.log('deleted');
      Materialize.toast('Health Unit Deleted',2000);

    }).catch(err => {
      console.log('error occurred ' + err);
    });

    this.router.navigate(['units']).catch(err=>console.log(err));

  }


  deleteConsellor(consellor:Consellor){
    this.consellorDoc=this.us.doc(`counsellors/${consellor.id}`);
    this.consellorDoc.delete().then(function(resolve){
Materialize.toast('Counsellor deleted',3000);


    }).catch(err=>Materialize.toast(err,3000));

  }

  getConsellors(){
    console.log('getting consellors');
    return this.consellors;
  }
  updateCounsellor(consellor:Consellor){
    console.log('updating item '+consellor);
    this.consellorDoc=this.us.doc(`counsellors/${consellor.id}`);
    this.consellorDoc.update(consellor).then(function(resolve){
Materialize.toast('Counsellor updated',3000);
    }).catch(err=>Materialize.toast(err,3000));

  }



  getReportedCases(){
  console.log('getting repoted cases ');
  console.log(this.cases);
  return this.cases;
  }





  getCase(id:string):Case{

    console.log(id);
    this.casesCollection.doc(id).valueChanges().subscribe(mycase=>{
      this.case=mycase;
       console.log(this.case);
      return this.case;
    });
      return this.case;
  }


  addDistrict(district): void {
    console.log('adding distritc' + district);
    const itemRef = this.db.object('districts');
itemRef.set({ name: district});
  }
  getVillages(district){
    this.db.list(`villages/${district}`).valueChanges();
  }



  }

