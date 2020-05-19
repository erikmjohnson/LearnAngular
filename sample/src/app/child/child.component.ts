import { Component, OnInit,OnChanges, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import {UserDetails} from '../Models/UserDetails'
import { Router } from '@angular/router';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges{

  constructor(private router:Router) { }


  demoTemplateVar:string="from child component";


  @Input('userDetails1') userDetails:UserDetails;
  @Output('datafromchild1') datafromchild= new EventEmitter();
 
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

  ngOnInit(): void {

  }

  childClick()
  {
    this.router.navigate(['dashboard']);
  }
}