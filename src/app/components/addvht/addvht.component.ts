import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvht',
  templateUrl: './addvht.component.html',
  styleUrls: ['./addvht.component.css']
})
export class AddvhtComponent implements OnInit {
public hasParam1: Boolean  = false;
public hasParam2: Boolean  = false;
  constructor(private routers:ActivatedRoute) {this.routers.paramMap.subscribe(params=>{
    if( params.has('name')){
this.hasParam1 = true;
    }
    if( params.has('village')){
      this.hasParam2 = true;
          }
  });

 }

  ngOnInit() {
  }

}
