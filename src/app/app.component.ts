import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coder';
  user="joshva";
  role="Front-End Developer";

  enter(){
    alert ("this is Event Binding Alert Message")
  }

  show=true
  fruits=['apple',"grapes","banana"]

  color="red";

  phone=false

  bluecolor='darkblue'
  size='20px'

  today=new Date

  item:any
  murder:any
  constructor(private service:ServiceService){

  this.item=this.service.things

  this.murder=this.service.kill()
  }

  read="Message From Parent component"

  innerMessage:any

  childmessage:any

  fromchild(event:any){
    this.childmessage=event;
  }


  


  
} 
