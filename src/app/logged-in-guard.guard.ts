import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase/app';

@Injectable()
export class LoggedInGuardGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){
    console.log('loggin guard has been invoked');

    
  }
  canActivate():boolean{
    let authenticated=false;
    if(this.authService.currentUserId!==undefined){
      console.log('user is authenticated can activate '+this.authService.currentUserId);
      authenticated=true;
    }else{
      this.router.navigate(['/login']);
    }

    console.log('retrieving guard with '+authenticated);
    return authenticated;

}
}