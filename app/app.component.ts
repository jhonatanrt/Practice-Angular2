import { Component } from '@angular/core';
import { GithubService } from './services/github.service';
import { SpotifyService } from './services/spotify.service';
import { ParameterService } from './services/parameter.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  // providers: [SpotifyService]

  // Second part
  // template: `
  // <navbar></navbar>
  // <div class="container">
  // <profile></profile>
  // </div>
  // `,
  // providers: [GithubService]

  // first part
  // templateUrl: 'app.component.html'
})
export class AppComponent { 
  constructor(){
  }
}
