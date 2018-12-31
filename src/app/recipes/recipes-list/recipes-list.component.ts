import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Test Recipe',
      'This is simply a test number 1',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('Second Test Recipe',
      'This is simply a test number 2',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];
  @Output() currentlySelectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe) {
    this.currentlySelectedRecipe.emit(recipe);
  }
}
