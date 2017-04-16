import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//componentes que conforman el sistema
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';

//pages
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/pages/home.component';
import {SearchComponent} from './components/search/search.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginComponent} from './components/Login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {ProtectedComponent} from './components/protected/protected.component';
import {SignUpComponent} from './components/signup/signup.component';

//routes
import { routing } from './app.routing';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { ParameterService } from './services/parameter.service';

//scroll
import { SlimScrollModule } from './modules/ng2-slimscroll'


@NgModule({
  imports:      [ BrowserModule,
                  routing,
                  HttpModule,
                  FormsModule,
                  ReactiveFormsModule,
                  SlimScrollModule ],
  declarations: [ AppComponent, 
                  ProfileComponent,
                  NavbarComponent,
                  SearchComponent,
                  JumbotronComponent,
                  AboutComponent,
                  HomeComponent,
                  LoginComponent,
                  LogoutComponent,
                  ProtectedComponent,
                  SignUpComponent
                  ],
  providers: [ AuthGuard, AuthService ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
