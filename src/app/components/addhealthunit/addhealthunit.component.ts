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
  unit: Unit = {
    name: '',
    locality: '',
    lat: '-0.6189226',
    lng: '30.6602422',
    added:Date(),
    description: '',
    province: 'Western Region',
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
     $ (document).ready(function() {
      $ ('select').material_select();
    });
  }
  uploadSingle() {
    
   if(this.selectedFiles==undefined){
Materialize.toast('Please choose an image',1000);
    return false;
   }
    let file = this.selectedFiles.item(0)
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

    if ((this.unit.phone.substring(4, 6)).startsWith("75")|| (this.unit.phone.substring(4, 6)).startsWith("77") || (this.unit.phone.substring(4, 6)).startsWith("79")
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
if((this.unit.locality.length)<4){
  Materialize.toast('Please add a district for health unit',2000);
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
 this.upSvc.startUpload(file,this.unit.name,this.unit.locality,this.unit.lat,this.unit.lng,this.unit.added,this.unit.description,this.unit.province,this.unit.open,this.unit.photo)

  }

  deleteUnit(event, unit) {
    this.unitService.deleteUnit(unit);

  }




}
