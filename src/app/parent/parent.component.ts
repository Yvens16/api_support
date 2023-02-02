import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  title:string = "Parent";

  constructor() { }

  ngOnInit(): void {
  }

}


/**
 * Parent ===> Liste de bières
 * Enfant ===> C'est une bière
 * Une bière c'est ===> name, tagline, first_brewed, description, image_url
 *  C'est aussi un boutton qui permet de supprimer la bière en utilisant event emitter
 */

// Faire un composant parent qui affiche une liste de Bières
// Faire un composant enfant qui affiche une bière
// Le composant enfant reprend les détails de la bière
// first_brewed, description, image_url, name, tagline


// Bonus pour les plus vaillants
// Faire un boutton dans l'enfant(détail de la bière) qui permet de supprimer la bière
// Utiliser event emitter pour envoyer un événement au parent qui bip bip bip(Se souvenir de l'exemple vu 
// en live coding la dernière fois sur les Event emitters)


//https://api.punkapi.com/v2/beers?page=1&per_page=10