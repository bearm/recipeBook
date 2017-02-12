import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe("Dummy", "Dummy", "http://lorempixel.com/400/200/food/");

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe)
  }

}
