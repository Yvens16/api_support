import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  quotes: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getQuotesFromService();
  }

  getQuotesFromService() {
    console.log('this.dataService.getQuotes():',
    this.dataService.getQuotes())

    this.quotes = this.dataService.getQuotes();
  }
}
