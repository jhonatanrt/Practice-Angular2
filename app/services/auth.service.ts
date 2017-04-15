import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

import { User } from '../models/user.interface'
import { Router } from '@angular/router'

declare var firebase: any;

@Injectable()
export class AuthService{
    
    constructor(private _http: Http, private router: Router){

    }

    signUpUser(user: User){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(function(error) {
            console.log(error.code,error.message);
        });
    }

    signInUser(user: User){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(function(error) {
            console.log(error.code,error.message);
        });
    }

    isAuthenticated(){
        let user = firebase.auth().currentUser;

        if (user) {
            return true;
        } else {
            return false
        }
    }

    logout(){
        firebase.auth().signOut();
        localStorage.clear();
        this.router.navigate(['/']);
    }
}