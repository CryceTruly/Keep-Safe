import { Case } from './../models/Case';
import { Consellor } from './../models/Consellor';
import { Unit } from './../models/unit';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class  UnitService {
  healthUnitCollection: AngularFirestoreCollection<Unit>;
  consellorsCollection: AngularFirestoreCollection<Consellor>;
  casesCollection:AngularFirestoreCollection<Case>;
  units: Observable<Unit[]>;
  cases:Observable<Case[]>;
  consellors:Observable<Consellor[]>;
  healthUnitDoc: AngularFirestoreDocument<Unit>;
  consellorDoc: AngularFirestoreDocument<Consellor>;
  casesDoc:AngularFirestoreDocument<Case>;
  constructor(public us: AngularFirestore) {
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

    console.log('submitting ........');
    this.healthUnitCollection.add(unit).then(e => {
      console.log('Health Unit has been added');
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
  deleteUnit(unit: Unit) {
    console.log('deleting unit');
    this.healthUnitDoc = this.us.doc(`healthunits/${unit.id}`);
    this.healthUnitDoc.delete().then(fun => {
      console.log('deleted');
      Materialize.toast('Health Unit Deleted',2000);
    }).catch(err => {
      console.log('error occurred ' + err);
    });

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
  }

