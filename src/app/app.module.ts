import { TimeAgo } from './utils/Time';
import { UnitService } from './services/unit.service';
import {AuthService} from './services/auth.service';
import {ChatService} from './services/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import 'materialize-css';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HealthunittsComponent } from './components/healthunitts/healthunitts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddhealthunitComponent } from './components/addhealthunit/addhealthunit.component';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './components/cases/cases.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddConsellorComponent } from './components/add-consellor/add-consellor.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CouncillorsComponent } from './components/councillors/councillors.component';
import { CounsellorComponent } from './components/counsellor/counsellor.component';
import { UploadService } from './services/upload.service';
import { CdetailComponent } from './components/cdetail/cdetail.component';

import {TimeAgoPipe} from 'time-ago-pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { AdddistrictComponent } from './components/adddistrict/adddistrict.component';
import { AddvhtComponent } from './components/addvht/addvht.component';
import { VillageComponent } from './components/village/village.component';
import { LogginGuardGuard } from './guards/loggin-guard.guard';
import { DistrictsComponent } from './components/districts/districts.component';
import { VillagesComponent } from './components/villages/villages.component';
import { AddvhtformComponent } from './components/addvhtform/addvhtform.component';
import { ConsellorComponent } from './components/consellor/consellor.component';
import { HeathunitComponent } from './components/heathunit/heathunit.component';
import { ClosedCasesComponent } from './components/closed-cases/closed-cases.component';


 const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent ,canActivate:[LogginGuardGuard]},
  { path: 'units', component: HealthunittsComponent ,canActivate:[LogginGuardGuard]},
  { path: 'cases', component: CasesComponent ,canActivate:[LogginGuardGuard]},
  { path: 'case/:id', component: CdetailComponent,canActivate:[LogginGuardGuard] },
  {path:'addvht/:name',component:AddvhtComponent},
  {path:'closed_cases',component:ClosedCasesComponent},
  {path:'addvht/:name/:village',component:AddvhtComponent},
  { path: 'conselor/:id', component: ConsellorComponent,canActivate:[LogginGuardGuard] },
  { path: 'addhealthunit', component: AddhealthunitComponent,canActivate:[LogginGuardGuard]},
  {path: 'account', component:AccountComponent,canActivate:[LogginGuardGuard]},
  {path: 'addcounsellor',component:AddConsellorComponent,canActivate:[LogginGuardGuard]},
  {path: 'login', component:LoginComponent},
  {path: '', component:DashboardComponent, pathMatch: 'full',canActivate:[LogginGuardGuard]},
   {path:'addvillage',component:VillageComponent,canActivate:[LogginGuardGuard]},
  {path: 'councillors', component:CouncillorsComponent,canActivate:[LogginGuardGuard]},
  { path: 'adddistrict', component: AdddistrictComponent,canActivate:[LogginGuardGuard]},
  {path: 'addvht', component: AddvhtComponent,canActivate:[LogginGuardGuard]},
  {path:'heathunit/:id',component:HeathunitComponent,canActivate:[LogginGuardGuard]}


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
    AccountComponent,
    LoginComponent,
    CouncillorsComponent,
    CounsellorComponent,
    TimeAgoPipe,
    CdetailComponent,
    SummaryPipe,
    AdddistrictComponent,
    AddvhtComponent,
    VillageComponent,
    DistrictsComponent,
    VillagesComponent,
    AddvhtformComponent,
    ConsellorComponent,
    HeathunitComponent,
    ClosedCasesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'raperecord'),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterializeModule,
    AngularFireStorageModule,
     AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UnitService, AuthService, ChatService,TimeAgo,TimeAgoPipe,UploadService,LogginGuardGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
