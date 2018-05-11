import { District } from './../../models/District';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from '@firebase/util';
import { AngularFireDatabase } from 'angularfire2/database';
import { Villa } from '../../models/Village';

@Component({
  selector: 'app-villages',
  templateUrl: './villages.component.html',
  styleUrls: ['./villages.component.css']
})
export class VillagesComponent implements OnInit {
district;
villages: any [];
  constructor(private router:ActivatedRoute,private db:AngularFireDatabase) {
    this.router.paramMap.subscribe(d=>{
      this.district = d.get('name');
      this.db.list(`villages/${this.district}`).valueChanges().subscribe(villages => {
        this.villages = villages;
      });

      console.log('from villages'+this.district);
    });
  }

  ngOnInit() {
    console.log('ng onit ran');


}

}
