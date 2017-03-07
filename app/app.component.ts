import { Component } from '@angular/core';
import { GithubService } from './services/github.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  // template: `
  // <navbar></navbar>
  // <div class="container">
  // <profile></profile>
  // </div>
  // `,
  providers: [GithubService]
  // templateUrl: 'app.component.html'
})
export class AppComponent { }
