import { Component, OnInit } from '@angular/core';
import {ChatService} from './../../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
message:string='';

  constructor(private chatservice:ChatService) { }
  ngOnInit() {
  }

  send(){
  	if(this.message!=''){
  //this.chatservice.sendMessage(this.message);
  this.message='';
}else{
	Materialize.toast('Cannot send an empty message',2000);
	return false;
}
  
  }
  handleSubmit(event){
  if(event.keyCode==13){
  this.send();
  }
  }

}
