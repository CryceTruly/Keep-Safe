import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedinGuardGuard implements CanActivate {
  constructor(private router:Router,private authService:AuthService){

  }
  canActivate():boolean{
    let authenticated=false;
    if(this.authService.currentUserId!==''){
      console.log('user is authenticated can activate ');
      authenticated=true;
    }else{
      this.router.navigate(['/dashboard']);
    }

    console.log('retrieving guard with '+authenticated);
    return authenticated;



  }
}
