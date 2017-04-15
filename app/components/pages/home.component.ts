import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  parameter: any = "hola";
  data: any = "jhon"

  ngOnInit(): void {
    this.parameter = JSON.parse(localStorage.getItem('parameter'));
    console.log(JSON.parse(localStorage.getItem('parameter')));
    console.log(this.parameter);
    this.data = this.parameter.data.validity_min_day;
  }

  constructor(){

  }


 }