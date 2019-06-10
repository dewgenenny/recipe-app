import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = true;
  showShoppingList = false;

  recipesWasClicked(){

    this.showRecipes = true;
    this.showShoppingList = false;


  }

  shoppingListWasClicked()
  {

    this.showRecipes = false;
    this.showShoppingList = true;

  }


}
