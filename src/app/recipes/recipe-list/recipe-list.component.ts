import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
   recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Tasty Burger', '/assets/burger.jpg'),
    new Recipe('Fries', 'Salty & Spicy Fries', '/assets/fries.jpg'),
    new Recipe('Veggie Burger', 'Spicy Veggie', '/assets/veggie.jpg')

  ]

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
