import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('First Test Recipe',
      'This is simply a test number 1',
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg',
      [new Ingredient('Bread', 2), new Ingredient('cheese', 3)]),
    new Recipe('Second Test Recipe',
      'This is simply a new test for number 2',
      'https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?cs=srgb&dl=broccoli-chicken-cooking-105588.jpg&fm=jpg',
      [new Ingredient('eggs', 2), new Ingredient('milk', 1)]),
      new Recipe('Third Test Recipe',
      'This is simply a test number 3',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-hYyN0HGtpUtJKmqsfI3yfPf6OjdhfG3lhi4PpO5o4FY1zEm',
      [new Ingredient('kale', 4), new Ingredient('spinach', 10)])
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // this retuns a copy of the recipes array so it cannot be altered via it's reference.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
