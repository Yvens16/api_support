import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  // Décorateur qui permet à la variable 
  // de recevoir une valeur depuis le parent
  @Input() message:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
