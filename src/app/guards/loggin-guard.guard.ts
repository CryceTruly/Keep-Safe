import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LogginGuardGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){
    console.log('loggin guard has been invoked');


  }
  canActivate():boolean{
    let authenticated=false;
    if(this.authService.currentUserId!==''){
      console.log('user is authenticated can activate ');
      authenticated=true;
    }else{
      this.router.navigate(['/login']);
    }

    console.log('retrieving guard with '+authenticated);
    return authenticated;



  }
}
