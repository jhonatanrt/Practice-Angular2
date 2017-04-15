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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../services/auth.service");
var SignUpComponent = (function () {
    // password: AbstractControl;
    function SignUpComponent(formBuilder, _authService) {
        this.formBuilder = formBuilder;
        this._authService = _authService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.compose([
                    forms_1.Validators.required
                    // this.isEmail
                ])],
            cpassword: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.isEqualPassword.bind(this)
                ])]
        }, {
            validator: this.isPasswordEqual.bind(this)
        });
        // this.password = this.myForm.get('password');
    };
    SignUpComponent.prototype.isEmail = function (control) {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return { Email: false };
        }
    };
    SignUpComponent.prototype.isEqualPassword = function (control) {
        var prueba = control.root;
        // console.log("valores: congtrol", control,"formgroup", prueba.value.email)
        // let prueba: FormGroup = this.myForm;
        // console.log("padre",prueba.value.email)
        // console.log(`Value: ${this.myForm.controls.on.value}`);
        // console.log(this.myForm.controls['email'].value)
        if (control.value != prueba.value.password) {
            return { password: false };
        }
    };
    SignUpComponent.prototype.isPasswordEqual = function (f) {
        // console.log(f)
        // console.log("value",f.value.password , f.value.cpassword)
        if (f.value.password == f.value.cpassword && f.value.password != "" && f.value.cpassword != "") {
            return null;
        }
        else {
            return { equalP: false };
        }
    };
    SignUpComponent.prototype.onSignup = function () {
        // console.log(this.myForm.value);
        this._authService.signUpUser(this.myForm.value);
        // console.log("registrando - o")
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'signup',
        templateUrl: 'signup.component.html',
        providers: [auth_service_1.AuthService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        auth_service_1.AuthService])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map