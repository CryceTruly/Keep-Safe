import { LoggedOutGuardGuard } from './logged-out-guard.guard';
import { LoggedInGuardGuard } from './logged-in-guard.guard';
import { TimeAgo } from './utils/Time';
import { UnitService } from './services/unit.service';
import {AuthService} from './services/auth.service';
import {ChatService} from './services/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage';
import { HealthunittsComponent } from './components/healthunitts/healthunitts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddhealthunitComponent } from './components/addhealthunit/addhealthunit.component';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './components/cases/cases.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddConsellorComponent } from './components/add-consellor/add-consellor.component';
import { ChatsComponent } from './components/chats/chats.component';
import { AccountComponent } from './components/account/account.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { FeedComponent } from './components/feed/feed.component';
import { MessageComponent } from './components/message/message.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientItemComponent } from './components/client-item/client-item.component';
import { LoginComponent } from './components/login/login.component';
import { CouncillornavbarComponent } from './components/councillornavbar/councillornavbar.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CouncillorsComponent } from './components/councillors/councillors.component';
import { CounsellorComponent } from './components/counsellor/counsellor.component';
import { UploadService } from './services/upload.service';
import { PipePipe } from './pipes/pipe.pipe';




 const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent,canActivate:[LoggedInGuardGuard] },
  { path: 'units', component: HealthunittsComponent ,canActivate:[LoggedInGuardGuard]},
  { path: 'cases', component: CasesComponent,canActivate:[LoggedInGuardGuard] },
  { path: 'addhealthunit', component: AddhealthunitComponent,canActivate:[LoggedInGuardGuard] },
  {path: 'account', component:AccountComponent,canActivate:[LoggedInGuardGuard]},
  {path: 'addcounsellor',component:AddConsellorComponent,canActivate:[LoggedInGuardGuard]},
  {path: 'login', component:LoginComponent,canActivate:[LoggedOutGuardGuard]},
  {path: '', component:DashboardComponent, pathMatch: 'full'},
  
  {path: 'dashboard', component:DashboardComponent,canActivate:[LoggedInGuardGuard]},
  {path: 'councillors', component:CouncillorsComponent,canActivate:[LoggedInGuardGuard]},
  { path: 'councillor/:id', component: CounsellorComponent ,canActivate:[LoggedInGuardGuard]}
  

];


@NgModule({
  declarations: [
    AppComponent,
    HealthunittsComponent,
    NavbarComponent,
    AddhealthunitComponent,
    CasesComponent,
    DashboardComponent,
    AddConsellorComponent,
    ChatsComponent,
    AccountComponent,
    ChatroomComponent,
    ChatFormComponent,
    FeedComponent,
    MessageComponent,
    ClientListComponent,
    ClientItemComponent,
    LoginComponent,
    CouncillornavbarComponent,
    CouncillorsComponent,
    CounsellorComponent,
    PipePipe
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'raperecord'),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
     AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UnitService, AuthService, ChatService,TimeAgo,UploadService,LoggedInGuardGuard,LoggedOutGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
