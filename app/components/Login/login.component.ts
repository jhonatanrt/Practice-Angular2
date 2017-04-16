import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms'

import { AuthService } from '../../services/auth.service'
import { ParameterService } from '../../services/parameter.service'

import { SlimScrollOptions } from '../../modules/ng2-slimscroll'

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html', //Template or templateUrl 
  providers: [AuthService, ParameterService]
})
export class LoginComponent implements OnInit {
  
  myForm: FormGroup;
  options: SlimScrollOptions;
  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private _authService: AuthService,
              private _parameterService: ParameterService,
              private router: Router
              ){
    this.options = {
        barBackground: '#C9C9C9',
        gridBackground: '#D9D9D9',
        barBorderRadius: '10',
        barWidth: '6',
        gridWidth: '2'
    };
  }


  ngOnInit(): void {
    this.scrollToBottom();

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

  scrolling(){
    let a = document.getElementById('scroll-window');
    a.scrollTop += 100;
    console.log("scrolling...")
  }

   scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }

    ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 
 }