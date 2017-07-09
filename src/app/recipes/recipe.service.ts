import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Tortilla de patata", "facil", "http://lorempixel.com/400/200/food/", [
      new Ingredient('Huevos', 6), new Ingredient('Patata',4), new Ingredient('Cebolla',1), new Ingredient('Aceite de oliva',1)
    ]),
    new Recipe("Risotto de setas", "medio", "http://lorempixel.com/400/200/food/", [
      new Ingredient('Arroz', 300), new Ingredient('Champiñones', 250), new Ingredient('Parmesano', 50), new Ingredient('Oregano', 5),
    ])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
