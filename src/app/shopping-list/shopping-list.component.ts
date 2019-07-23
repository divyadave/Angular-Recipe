import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 150),
    new Ingredient('Grapes', 250)
  ]

  constructor() { }

  ngOnInit() {
  }

}
