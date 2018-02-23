import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedOutGuardGuard implements CanActivate {
  constructor(private router:Router,private authService:AuthService){

  }
  canActivate():boolean{
    let authenticated=false;
    if(this.authService.currentUserId==undefined){
      console.log('user is authenticated can activate '+this.authService.currentUserId);
      authenticated=true;
    }else{
      authenticated=true;
      this.router.navigate(['/dashboard']);
    }

    console.log('retrieving guard with '+authenticated);
    return authenticated;

}
}
