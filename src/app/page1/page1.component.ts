import { Component, OnInit } from '@angular/core';    // Import the dependencies
import { DataService } from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {    // Defining class Page1Component

  constructor(private dataService: DataService) { }    // Defining constructor

  ngOnInit(): void {    // OnInit lifecycle hook
    // this.getSimpsonQuotes();
  }
  /**
   * 17222
   * 13501
   * 17225
   * 14610
   */

  /**
   * Sur la page 1, je un titre et un boutton qui nous fais les appels à l'API
   * Sur la page 2, je dois afficher les noms des coktails, la propriété s'appelle strDrink
   */

  async getSimpsonQuotes() {    // Define async function that fetchs the data from the server
    // console.log("Exécution de la fonction")
    // return fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    //   .then(response => response.json())
    //   .then(quotes => {
    //     console.log("quotes", quotes);
    //     this.dataService.setQuotes(quotes)
    //   });
    const urls = ["https://thesimpsonsquoteapi.glitch.me/quotes",    // Define an array of urls to fetch data
      "https://thesimpsonsquoteapi.glitch.me/quotes"];
    for await (const url of urls) {    // Perform looping on the array of urls
      const res = await fetch(url);    // Fetch the data from the server
      const quotes = await res.json();    // Parse the response to JSON
      console.log("quotes", quotes);    // Print the quote on console
    }

    //   const res1 = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    //   const quotes1 = await res1.json();

    //   const res2 = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    //   const quotes2 = await res1.json();

    //   return fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    //   .then((response) => response.json())
    //   .then((quotes) => {
    //     console.log("quotes", quotes);
    //     return fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    //   })
    //   .then((response) => response.json())
    //   .then((quotes) => {console.log(quotes) });
  }


}
