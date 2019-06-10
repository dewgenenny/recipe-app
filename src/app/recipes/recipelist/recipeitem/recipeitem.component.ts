import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipes.model";

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected  = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected()
  {
    this.recipeSelected.emit();
  }

}
