import { District } from './../../models/District';
import { UploadService } from './../../services/upload.service';
import { Upload } from './../../utils/Upload';
import { Router, Routes } from '@angular/router';
import { AngularFireStorage ,AngularFireUploadTask} from 'angularfire2/storage';
import { FormsModule } from '@angular/forms';
import { UnitService } from './../../services/unit.service';
import { Consellor } from './../../models/Consellor';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import {MaterializeAction} from 'angular2-materialize';





@Component({
  selector: 'app-add-consellor',
  templateUrl: './add-consellor.component.html',
  styleUrls: ['./add-consellor.component.css']
})
export class AddConsellorComponent implements OnInit {
  //object task helps upload,srop,resume,uploads
  task:AngularFireUploadTask;
  photoDownloadUrl:Observable<String>;
  selectedFiles: FileList;
  currentUpload: Upload;
  selected: any = 'Male';
  items = ['Male', 'Female'];
consellor:Consellor={
  name:'',
  profile:'',
  photo:'',
  away:false,
  gender:'',
  email:'',
  status:'available',

}


  constructor(public service:UnitService,public uploadservice:UploadService,public angularFireStorage:AngularFireStorage,public authService:AuthService) {


  }
  detectFiles(event) {
    console.log('detectFiles');
    this.selectedFiles = event.target.files;
}




  ngOnInit() {
    console.log('ngoninit ran');
    $(document).ready(function() {
      $ ('select').material_select();
    });

  }

  signUpCouncillor(){
    let file1 = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file1);
    if(file1.name==''){
      Materialize.toast('Please pick a photo',2000);
      return false;
    }

    if(file1.type.split('/')[0]!=='image'){
      Materialize.toast('Picked file is not an image',2000);
      return false;
    }

if((this.consellor.email.length)<5){
  Materialize.toast('Email invalid',2000);
  return false;

}

if(this.selected == ''){
  Materialize.toast('Add gender',2000);
  return false;

}
if((this.consellor.name.length)<2){
  Materialize.toast('Name is required',2000);
  return false;

}


if((this.consellor.profile.length)<5){
  Materialize.toast('Describe a consellor further',2000);
  return false;

}



if(this.selectedFiles==undefined){
  Materialize.toast('Please choose an image',1000);
      return false;
     }



      console.log(1);










   this.authService.signUp(this.consellor.email,this.selected,"Xvq6th9090",
   this.consellor.name,this.consellor.profile,this.consellor.photo).catch(err=>{
   }).then(resolve=>{
    const file = this.selectedFiles.item(0);
    this.uploadservice.startUploadForCouncillor(file,this.consellor.name,this.consellor.email,this.selected,
      this.consellor.status,this.consellor.photo,this.consellor.profile);
 Materialize.toast('Consellor Created',2000);
 document.forms[0].reset();

   });
    }




//upload function
startUpload(event,FileList){
  console.log('uploading started');
  const file=event.item(0);
  if(file.type.split('/')[0]!=='image'){
    Materialize.toast('Picked file is not an image',2000);
    return;
  }
  //set a storage location
  const path=`images/${new Date().getTime()}_${file.name}`;

  //the main task
  this.task=this.angularFireStorage.upload(path,file);

  //getdownloadurl
  this.photoDownloadUrl=this.task.downloadURL();
this.photoDownloadUrl.subscribe(snap=>{
  console.log('got a consellor');
this.consellor.photo=snap[0];
  });

console.log(this.photoDownloadUrl);

}
  selectedEventHandler(event:any){
    console.log('triggered');
    console.log(this.consellor.photo);
    this.consellor.gender=event.target.value;
  }

}
