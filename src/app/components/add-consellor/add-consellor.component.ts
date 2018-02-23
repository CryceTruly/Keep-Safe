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
 
consellor:Consellor={
  name:'',
  profile:'',
  photo:'data:image/png;base64,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',
  away:false,
  gender:'',
  email:'',
  status:'online',
  test:''
 
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

if((this.consellor.gender.length)<1){
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










    this.authService.signUp(this.consellor.email,this.consellor.gender,"Xvq6th9090",this.consellor.name,this.consellor.profile,this.consellor.photo)
    let file = this.selectedFiles.item(0);
    this.uploadservice.startUploadForCouncillor(file,this.consellor.name,this.consellor.email,this.consellor.gender,this.consellor.status,this.consellor.photo,this.consellor.profile);
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
