import { District } from './../../models/District';
import { UploadService } from './../../services/upload.service';
import { Upload } from './../../utils/Upload';
import { Observable } from 'rxjs/Observable';
import { Unit } from './../../models/unit';
import { UnitService } from './../../services/unit.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage ,AngularFireUploadTask} from 'angularfire2/storage';



@Component({
  selector: 'app-addhealthunit',
  templateUrl: './addhealthunit.component.html',
  styleUrls: ['./addhealthunit.component.css']
})
export class AddhealthunitComponent implements OnInit {

  selected: any = 'Mbarara';
  items = ['Mbarara', 'Arua','Bushenyi','Kampala','Masaka','Tororo','Kasese','FortPortal','Bundibugyo',
  'Masindi','Entebbe','Ibanda'];

  unit: Unit = {
    name: '',
    locality: '',
    lat: '-0.6189226',
    lng: '30.6602422',
    added:Date(),
    description: '',
    province: 'Western',
    open: '',
    phone: '+256',
    photo:''
  };
  task:AngularFireUploadTask;
  photoDownloadUrl:Observable<String>;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private unitService: UnitService,public angularFireStorage:AngularFireStorage
    ,private upSvc:UploadService) {
    }
     detectFiles(event) {
      this.selectedFiles = event.target.files;
  }
  ngOnInit() {




  }




  uploadSingle() {
    console.log(this.selected);
    if((this.unit.province.length)<1){
      Materialize.toast('Please add a region for health unit',2000);
      return false;
    }
    console.log(this.unit.province)
   if(this.selectedFiles==undefined){
Materialize.toast('Please choose an image',1000);
    return false;
   }
    const file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    if(file.name==''){
      Materialize.toast('Please pick a photo',2000);
      return false;
    }

    if(file.type.split('/')[0]!=='image'){
      Materialize.toast('Picked file is not an image',2000);
      return false;
    }

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
    }else{
    Materialize.toast("Phone is not valid",2000);

    return false;
    }

if((this.unit.description.length)<20){
  Materialize.toast('Please describe the health unit further',2000);
  return false;
}

if((this.unit.lat.length)<3){
  Materialize.toast('Please add valid Lat Coodinates',2000);
  return false;
}

if((this.unit.lng.length)<3){
  Materialize.toast('Please add valid Longtitide Coodinates',2000);
  return false;
}
if((this.selected.length)<3){
  Materialize.toast('Please choose a district for health unit',2000);
  return false;
}

if((this.unit.province.length)<4){
  Materialize.toast('Please add a region for health unit',2000);
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

Materialize.toast('Started adding health center',2000);
 this.upSvc.startUpload(this.unit.phone,file,this.unit.name,this.selected,this.unit.lat,this.unit.lng,this.unit.added,
  this.unit.description,this.unit.province,this.unit.open);


  }

  deleteUnit(event, unit) {
    this.unitService.deleteUnit(unit);

  }




}
