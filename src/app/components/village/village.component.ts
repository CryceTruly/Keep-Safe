import { Observable } from 'rxjs/Observable';
import { District } from './../../models/District';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
village: any = ' ';
selected: string = '';
items = ['Mbarara', 'Arua','Bushenyi','Kampala','Masaka','Tororo','Kasese','FortPortal','Bundibugyo',
'Masindi','Entebbe','Ibanda'];

constructor(private db:AngularFireDatabase) {
    //this.districts = db.object('districts').valueChanges();

   }
  ngOnInit() {
    $('.preloader').hide();
  }


addVillage(){
  if(this.selected.length == 0){
Materialize.toast('Choose a district to add a village to ',2000);
return;
  }
if( (this.village) < 3) {
Materialize.toast('Village name invalid,should be atleast 3 charaters ',2000);

    return;
  }
  $('.preloader').show();
  const shirtsRef = this.db.list(`villages/${this.selected}`);
  shirtsRef.push({ name: this.village }).then(resolve => {

Materialize.toast('Village added to ' + this.selected, 2000);
this.village = ' ';
document.forms[0].reset();
$('.preloader').hide();


     });
  }
}
