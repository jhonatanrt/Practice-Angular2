import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//componentes que conforman el sistema
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';

//pages
import {AboutComponent} from './components/pages/about.component';
import {HomeComponent} from './components/pages/home.component';
import {ProfileComponent} from './components/profile/profile.component';

//routes
import {routing} from './app.routing';


@NgModule({
  imports:      [ BrowserModule,routing,HttpModule,FormsModule ],
  declarations: [ AppComponent, 
                  ProfileComponent,
                  NavbarComponent,
                  JumbotronComponent,
                  AboutComponent,
                  HomeComponent
                  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
