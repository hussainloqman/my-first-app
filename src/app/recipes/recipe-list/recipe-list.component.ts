import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('A test Recipe','This is samply recipe','https://cdn-image.myrecipes' +
      '.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA' ),
    new Recipe ('A test Recipe','This is samply recipe','https://cdn-image.myrecipes' +
    '.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA' )
  ];
  constructor() { }

  ngOnInit() {
  }

}