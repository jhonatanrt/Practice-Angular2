"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
//componentes que conforman el sistema
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var jumbotron_component_1 = require("./components/jumbotron/jumbotron.component");
//pages
var about_component_1 = require("./components/about/about.component");
var home_component_1 = require("./components/pages/home.component");
var search_component_1 = require("./components/search/search.component");
var profile_component_1 = require("./components/profile/profile.component");
var login_component_1 = require("./components/Login/login.component");
var logout_component_1 = require("./components/logout/logout.component");
var protected_component_1 = require("./components/protected/protected.component");
var signup_component_1 = require("./components/signup/signup.component");
//routes
var app_routing_1 = require("./app.routing");
var auth_guard_1 = require("./services/auth.guard");
var auth_service_1 = require("./services/auth.service");
//scroll
var ng2_slimscroll_1 = require("./modules/ng2-slimscroll");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            app_routing_1.routing,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_slimscroll_1.SlimScrollModule],
        declarations: [app_component_1.AppComponent,
            profile_component_1.ProfileComponent,
            navbar_component_1.NavbarComponent,
            search_component_1.SearchComponent,
            jumbotron_component_1.JumbotronComponent,
            about_component_1.AboutComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            logout_component_1.LogoutComponent,
            protected_component_1.ProtectedComponent,
            signup_component_1.SignUpComponent
        ],
        providers: [auth_guard_1.AuthGuard, auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map