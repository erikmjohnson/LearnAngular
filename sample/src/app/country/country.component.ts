import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input('country') country: any[];
  @Input('columns') columns: any[];

  constructor() { }
  
  ngOnInit(): void {
  }

}