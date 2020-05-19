import { Component, OnInit } from '@angular/core';
import {UserDetails} from '../Models/UserDetails'


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  user:UserDetails={UserName:'Zach',UserAddress:'abc',UserPh:'12345345634'}
  ngOnInit(): void {
  }

  changeChildInput(){
    this.user={UserName:'Pooja',UserAddress:'abc',UserPh:'12345345634'};
  }

  eventfromChild(abc:UserDetails){
    alert(abc);
  }
}
