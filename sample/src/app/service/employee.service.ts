import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  public myname:string= 'employeeservice'

  printNmae():void{
   alert(this.myname);
  }
}
