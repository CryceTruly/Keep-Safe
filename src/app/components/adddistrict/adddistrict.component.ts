import { District } from './../../models/District';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from "@angular/core";
import { UnitService } from "../../services/unit.service";
import { Country } from "../../models/Country";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "app-adddistrict",
  templateUrl: "./adddistrict.component.html",
  styleUrls: ["./adddistrict.component.css"]
})
export class AdddistrictComponent implements OnInit {
   names: Observable<any>;
   id:any;
  selectedCountry: Country =  {id:1,name:"USA"};
  countries = [
    {id:1,name:"USA"},
    {id:2,name:"GERM"},
    {id:3,name:"ITA"},
    {id:4,name:"UGA"},
    {id:5,name:"TANZ"}

  ];


    name: '';
  constructor(private unitService:UnitService,private db: AngularFireDatabase) {
    this.names=this.db.list('/districts', ref => ref.orderByChild('name')).valueChanges();
  }

  ngOnInit() {

    $('.alert').hide();
  }

  addDistrict() {
    if ((this.name.length) >= 4 ) {

      const shirtsRef = this.db.list<District>('districts');

      shirtsRef.push({ name: this.name, id: this.name }).then(resolve => {
      $('.alert2').show();
        console.log('added');
        this.name = '';
        });
    } else {

        $('.alert').show();
      }
      return;
    }
  }

