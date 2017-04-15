import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

import { AuthService } from '../../services/auth.service'

@Component({
  moduleId:module.id,
  selector: 'signup',
  templateUrl: 'signup.component.html', //Template or templateUrl 
  providers: [AuthService]
})
export class SignUpComponent implements OnInit{
  myForm: FormGroup;
  // password: AbstractControl;

  constructor(private formBuilder: FormBuilder,
              private _authService: AuthService){

  }

  ngOnInit(){
    this.myForm = this.formBuilder.group({
      email: ['',Validators.required],
      password:['',Validators.compose([
        Validators.required
        // this.isEmail
      ])],
      cpassword:['',Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])]
    },{
      validator: this.isPasswordEqual.bind(this)
    });

    // this.password = this.myForm.get('password');

  }

  isEmail(control: FormControl): {[s: string]: boolean}{
    if(!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
      return {Email: false}
    }
  }

  isEqualPassword(control: FormControl){
    let prueba: AbstractControl = control.root;
    // console.log("valores: congtrol", control,"formgroup", prueba.value.email)
    // let prueba: FormGroup = this.myForm;
    // console.log("padre",prueba.value.email)
    // console.log(`Value: ${this.myForm.controls.on.value}`);
    // console.log(this.myForm.controls['email'].value)

    if(control.value != prueba.value.password){
      return {password: false}
    }
  }

  isPasswordEqual(f: FormGroup){
    // console.log(f)
    // console.log("value",f.value.password , f.value.cpassword)

      if(f.value.password == f.value.cpassword && f.value.password!="" && f.value.cpassword!=""){
        return null;
      }
      else{
        return {equalP: false};
      }
  }


  onSignup(){
    // console.log(this.myForm.value);
    this._authService.signUpUser(this.myForm.value);
    // console.log("registrando - o")
  }
 }