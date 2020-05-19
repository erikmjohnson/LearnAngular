import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Form, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  
 @Input() datatoemployee:string;

  employeeName:string='abc';
  imageurl:string="assets/image/angular.jpg";

  employees:Employee[]=[{Name:'Zach', Age:30, Exp:3},{Name:'Eric', Age:30, Exp:3}];

  employeeNameFormGroup:FormGroup = new FormGroup({
    firstName: new FormControl('Erik', [Validators.maxLength(10), Validators.required]),
    lastName: new FormControl('Johnson')
  });

  ngOnInit(): void {
  }

  get formfields() {
    return this.employeeNameFormGroup.controls;
  }


  btnClick()
  {
    this.employeeName="efgh";
  }

  submit() {
    console.log(this.employeeNameFormGroup.get('firstName').value, this.employeeNameFormGroup.get('lastName').value);
    this.employeeNameFormGroup.setValue({
      firstName: 'cat',
      lastName: 'dog'
    })
  }
}
  

interface Employee{
Name:string,
Age:number,
Exp:number
}