import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beerchild',
  templateUrl: './beerchild.component.html',
  styleUrls: ['./beerchild.component.css']
})
export class BeerchildComponent implements OnInit {
  @Input() beer: any;
  @Output() deleteEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}


  deleteBeer() {
    this.deleteEmitter.emit(this.beer);
  }

}
