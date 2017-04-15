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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../services/auth.service");
var parameter_service_1 = require("../../services/parameter.service");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, _authService, _parameterService, router) {
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this._parameterService = _parameterService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.onSignin = function () {
        console.log("submit");
        console.log(this.myForm.value);
        this._authService.signInUser(this.myForm.value);
        this._parameterService.getParameter().subscribe(function (param) {
            console.log(param);
            localStorage.setItem('parameter', JSON.stringify(param));
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
        providers: [auth_service_1.AuthService, parameter_service_1.ParameterService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        auth_service_1.AuthService,
        parameter_service_1.ParameterService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map