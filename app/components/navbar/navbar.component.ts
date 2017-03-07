import { Component } from '@angular/core';

@Component({
  moduleId:module.id, //contiene al componente, resuelvelas direcciones URL
  selector: 'navbar', //con esto realizamos la insercion mediante etiqueta en la plantilla
  templateUrl: 'navbar.component.html' //Template or templateUrl 
})
export class NavbarComponent {
    // branding = 'My Website';
    branding = 'Spotifull';
 }