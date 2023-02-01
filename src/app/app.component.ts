import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api_support';
  quotes: Quote[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Traitement avant le chargement de la page
    this.getSimpsonsQuoteObserver();
  }


  getSimpsonsQuotesFetch() {
    return fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then((quotesFromApi: Quote[]) => {
        console.log(quotesFromApi);
        this.quotes = quotesFromApi;
      })
  }

  async getSimpsonsQuotesAsyncAwait() {
    const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const quotesFromApi: Quote[] = await response.json();
    console.log(quotesFromApi);
    this.quotes = quotesFromApi;
  }


  getSimpsonsQuotesHttpObservable() {
    return this.http.get<Quote[]>("https://thesimpsonsquoteapi.glitch.me/quotes")
      .subscribe((quotesFromApi: Quote[]) => {
        console.log(quotesFromApi);
        this.quotes = quotesFromApi;
      })
  }

  getSimpsonsQuoteObserver() {
    const observer = {
      next: (quotesFromApi: Quote[]) => {
        console.log(quotesFromApi);
        this.quotes = quotesFromApi;
      }, // Success case
      error: (err: string) => console.error('Observer got an error: ' + err), // Failed case
      complete: () => console.log('Observer got a complete notification'), // Finished
    };

    return this.http.get<Quote[]>("https://thesimpsonsquoteapi.glitch.me/quotes")
      .subscribe(observer);
  }

}
