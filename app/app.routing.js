"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/pages/home.component");
var about_component_1 = require("./components/about/about.component");
var search_component_1 = require("./components/search/search.component");
var login_component_1 = require("./components/Login/login.component");
var logout_component_1 = require("./components/logout/logout.component");
var protected_component_1 = require("./components/protected/protected.component");
var signup_component_1 = require("./components/signup/signup.component");
var auth_guard_1 = require("./services/auth.guard");
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }, {
        path: 'search',
        component: search_component_1.SearchComponent
    }, {
        path: '',
        component: login_component_1.LoginComponent
    }, {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    }, {
        path: 'protected',
        component: protected_component_1.ProtectedComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: 'signup',
        component: signup_component_1.SignUpComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map