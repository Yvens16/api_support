import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  quotes: any;
  constructor() { }

  getData() {
    // return une donnée(propriété) dispo dans le service
  }

  setData(){
    // modifie une donnée(propriété) dispo dans le service
  }

  setQuotes(quotes:any) {
    this.quotes = quotes;
  }

  getQuotes() {
    return this.quotes;
  }
}
