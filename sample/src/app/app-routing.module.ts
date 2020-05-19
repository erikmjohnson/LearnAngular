import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './home/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent  } from './parent/parent.component';


const routes:Routes= [{path:'employee',component:EmployeeComponent},
                        {path:'dashboard',component:DashboardComponent},
                        {path:'',redirectTo:'dashboard',pathMatch:'full'},
                        {path:'parent',component:ParentComponent, pathMatch:'prefix'}]; //localhost:3736/parent/:id/details

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
