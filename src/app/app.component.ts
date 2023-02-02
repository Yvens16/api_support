import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/index';


interface IBeer {
  first_brewed: string,
  description: string,
  image_url: string,
  name: string,
  tagline: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api_support';
  quotes: Quote[] = [];

  beers: IBeer[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Traitement avant le chargement de la page
    // this.getSimpsonsQuoteObserver();
    this.getBeers();
  }

  async getBeers() {
    const res = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=10");
    const beersFromApi: IBeer[] = await res.json();
    this.beers = beersFromApi;
  }

  onDeleteBeer(beer: IBeer) {
    console.log('beer:', beer)
    // this.beers = this.beers.filter(b => b.name !== beer.name);
    // splice retire des éléments d'un tableau existant à partir d'un index donné
    // Le premier paramètre est l'index de départ 
    // Et le second est le nombre d'éléments à supprimer
    console.log("longueur du tableau", this.beers.length);
    this.beers.splice(this.beers.indexOf(beer), 1);
    console.log("longueur du tableau", this.beers.length);
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
