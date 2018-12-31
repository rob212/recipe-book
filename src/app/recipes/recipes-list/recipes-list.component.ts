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
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'),
    new Recipe('Second Test Recipe',
      'This is simply a new test for number 2',
      'https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?cs=srgb&dl=broccoli-chicken-cooking-105588.jpg&fm=jpg'),
      new Recipe('Third Test Recipe',
      'This is simply a test number 3',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-hYyN0HGtpUtJKmqsfI3yfPf6OjdhfG3lhi4PpO5o4FY1zEm')
  ];
  @Output() currentlySelectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe) {
    this.currentlySelectedRecipe.emit(recipe);
  }
}
