import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtheading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;
    
    constructor(){
        this.jbtheading = "Hello world";
        this.jbtText = "This is a simple hero unit, a simple jumbotron-style";
        this.jbtBtnText = "ReadMore";
        this.jbtBtnUrl = "/about";
    }
 }