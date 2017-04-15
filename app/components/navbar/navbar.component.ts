import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service'

@Component({
  moduleId:module.id, //contiene al componente, resuelvelas direcciones URL
  selector: 'navbar', //con esto realizamos la insercion mediante etiqueta en la plantilla
  templateUrl: 'navbar.component.html', //Template or templateUrl 
  providers: [AuthService]
})
export class NavbarComponent {
    // branding = 'My Website';
    branding = 'Security';

    constructor( private _authService: AuthService){

    }

    isAuth(){
      return this._authService.isAuthenticated();
    }

    closeSesion(){
      this._authService.logout();
    }
 }