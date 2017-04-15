import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms'

import { AuthService } from '../../services/auth.service'
import { ParameterService } from '../../services/parameter.service'

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html', //Template or templateUrl 
  providers: [AuthService, ParameterService]
})
export class LoginComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private _authService: AuthService,
              private _parameterService: ParameterService,
              private router: Router
              ){
    
  }


  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  onSignin(){
    console.log("submit")
    console.log(this.myForm.value)
    this._authService.signInUser(this.myForm.value);
    this._parameterService.getParameter().subscribe(param => {
      console.log(param);
      localStorage.setItem('parameter',JSON.stringify(param));
    });

   
    
  }
 }