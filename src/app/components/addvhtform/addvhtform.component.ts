import { VHT } from './../../models/VHT';
import { Observable } from 'rxjs/Observable';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Component, OnInit } from '@angular/core';
import { Upload } from '../../utils/Upload';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvhtform',
  templateUrl: './addvhtform.component.html',
  styleUrls: ['./addvhtform.component.css']
})
export class AddvhtformComponent implements OnInit {
selecteddistrict: string;
selectedvillage: string;


  selected: any = 'Male';
  items = ['Male', 'Female'];
  task: AngularFireUploadTask;
  photoDownloadUrl: Observable<String>;
  selectedFiles: FileList;
  currentUpload: Upload;
  district: string;
  vmember =  {
    name: '',
    profile: '',
    photo: '',
    gender: '',
    id: '',
    phone: '+256'
  };

  private basePath = '/uploads';
  uploads: Observable<Upload[]>;


  constructor(private afs:AngularFirestore,private storage:AngularFireStorage,private route:ActivatedRoute) {
    this.route.paramMap.subscribe((parammap)=>{
this.selecteddistrict=parammap.get('name');
this.selectedvillage=parammap.get('village');
console.log('details to add to '+ this.selecteddistrict + this.selectedvillage);
    });
  }

  ngOnInit() {
    this.vmember.gender=this.selected;
  }
OnChanges(){
  this.vmember.gender=this.selected;
}

  detectFiles(event) {
    console.log('detectFiles');
    this.selectedFiles = event.target.files;
}


  addVHT() {
    if(this.selectedFiles==undefined){
      Materialize.toast('Please pick a photo',2000);
      return false;
    }
    const file1 = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file1);
    if(file1.name==''){
      Materialize.toast('Please pick a photo',2000);
      return false;
    }

    if(file1.type.split('/')[0]!=='image'){
      Materialize.toast('Picked file is not an image',2000);
      return false;
    }

if(this.selected == ''){
  Materialize.toast('Add gender',2000);
  return false;

}
if((this.vmember.name.length)<2){
  Materialize.toast('Name is required',2000);
  return false;

}
if ((this.vmember.phone.substring(4, 6)).startsWith("75")|| (this.vmember.phone.substring(4, 6)).startsWith("77")
|| (this.vmember.phone.substring(4, 6)).startsWith("79")
|| (this.vmember.phone.substring(4, 6)).startsWith("74") || (this.vmember.phone.substring(4, 6)).startsWith("39") ||
(this.vmember.phone.substring(4, 6)).startsWith("70")
|| (this.vmember.phone.substring(4, 6)).startsWith("71") || (this.vmember.phone.substring(4, 6)).startsWith("78")
) {
}else{
Materialize.toast("Phone is not valid",2000);

return false;
}


if((this.vmember.profile.length)<4){
  Materialize.toast('Describe further',2000);
  return false;

}



if(this.selectedFiles==undefined){
  Materialize.toast('Please choose an image',1000);
      return false;
     }
     const path =`vhtimages/${new Date().getTime()}_${file1.name}`;

     //the main task
     this.task = this.storage.upload(path,file1);

     //getdownloadurl
     this.photoDownloadUrl=this.task.downloadURL();

     console.log(this.photoDownloadUrl);


const vht:VHT={
  phone:this.vmember.phone,
  photo:path,
  name:this.vmember.name,
  profile:this.vmember.profile,
  gender:this.selected,
  village:this.selectedvillage
};
this.afs.collection('vhtmembers').doc(this.selecteddistrict)
.collection(this.selectedvillage).add(vht).then(function() {
  Materialize.toast('VHT Added ', 2000);
  document.forms[0].reset();
}).catch(e => console.log(e));



  }
}
