import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Rx'
import { AuthService } from './auth.service'



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log("protected",this._authService.isAuthenticated())
        return this._authService.isAuthenticated();
       
    }


}