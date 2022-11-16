import { Component, OnInit } from '@angular/core';
import { categories } from './stock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  Categories=categories;
  ngOnInit(): void {
  }

}
