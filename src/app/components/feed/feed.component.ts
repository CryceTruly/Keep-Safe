import { Component, OnInit ,OnChanges} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from './../../models/chatMessage';
import {ChatService} from './../../services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
feed:Observable<ChatMessage[]>;
  constructor(private chatservice:ChatService) { }

  ngOnInit() {
  	//this.chatservice.getMessages();
  }
ngOnChanges(){
	//this.chatservice.getMessages();
}
}
