import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpclient:HttpClient) { }

  public getCovidSummary():Observable<any>
  {
   return this.httpclient.get("http://democoreapi.azurewebsites.net/covid/summary");//https://api.covid19api.com/summary");
  
  }
}
