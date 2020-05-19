import { Component, OnInit, OnDestroy } from '@angular/core';
import { CovidService } from '../service/covid.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {

  columns:string[];
  covidSummary:any=[];
  covidSummaryUntouched:any=[];
  searchtxt:string='';
  covidSub:Subscription;
  constructor(private covidSer:CovidService) {
    this.columns=["Country","Total cases","Total Recovered" ];
   }

  ngOnInit(): void {
   this.covidSub=  this.covidSer.getCovidSummary().subscribe(
    res=>{
    this.covidSummaryUntouched=res;
    this.searchchange('');
      res},err=>{console.log(err)});
  }


  searchchange(data)
  {
    this.covidSummary.Countries=[];
    this.covidSummary.Countries=this.covidSummaryUntouched.Countries.filter(countrysum => {
      if(countrysum.Country.toLowerCase().indexOf(data.toLowerCase())!=-1)
      return true;
    });
  }

   ngOnDestroy()
   {
     this.covidSub.unsubscribe();
   }
}
