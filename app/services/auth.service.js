"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(_http, router) {
        this._http = _http;
        this.router = router;
    }
    AuthService.prototype.signUpUser = function (user) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
            console.log(error.code, error.message);
        });
    };
    AuthService.prototype.signInUser = function (user) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
            console.log(error.code, error.message);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = firebase.auth().currentUser;
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        firebase.auth().signOut();
        localStorage.clear();
        this.router.navigate(['/']);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map