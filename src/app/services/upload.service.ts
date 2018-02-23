import { Consellor } from './../models/Consellor';
import { AuthService } from './auth.service';
import { AngularFireStorage, AngularFireStorageModule,AngularFireUploadTask } from 'angularfire2/storage';
import { Upload } from './../utils/Upload';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore} from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { UnitService } from '../services/unit.service';


@Injectable()
export class UploadService {

  constructor(private afs: AngularFireStorage,
    private authService:AuthService,
    private nfs:AngularFirestore,private unitService: UnitService) { }


  private basePath:string = '/uploads';
  uploads: Observable<Upload[]>;

  task:AngularFireUploadTask;
  photoDownloadUrl:Observable<String>;
  selectedFiles: FileList;
//upload function
startUpload(files,name,locality,lat,lng,added,description,province,open,photo){
 console.log('uploading started');
  const file=files;
  if(file.type.split('/')[0]!=='image'){
    Materialize.toast('Picked file is not an image',2000);
    return;
  }
  //set a storage location
  const path=`images/${new Date().getTime()}_${file.name}`;

  //the main task
  this.task=this.afs.upload(path,file);

  //getdownloadurl
  this.photoDownloadUrl=this.task.downloadURL();

  console.log(this.photoDownloadUrl);
 
 
  //sets up a unit object  for writing


const data={
  name:name,
  photo:path,
  locality:locality,
  lat:lat,
  lng:lng,
  added:added,
  description:description,
  province:province,
  open:open
}

//calls the service to add a new document to firestore
this.unitService.addHealthUnit(data);

}

startUploadForCouncillor(files,name,email,gender,status,photo,profile){
  console.log('uploading started');
  const file=files;
  if(file.type.split('/')[0]!=='image'){
    Materialize.toast('Picked file is not an image',2000);
    return;
  }
  //set a storage location
  const path=`councillorimages/${new Date().getTime()}_${file.name}`;

  //the main task
  this.task=this.afs.upload(path,file);

  //getdownloadurl
  this.photoDownloadUrl=this.task.downloadURL();

  console.log(this.photoDownloadUrl);
 
 
  //sets up a unit object  for writing

  const councillor:Consellor={
    email: email,
    name: name,
    gender:gender,
    status: 'online',
    profile:profile,
    password:'JKL234!TAB',
    photo:path
  };

//calls the service to add a new document to firestore
this.authService.setUserData(councillor);
}

}