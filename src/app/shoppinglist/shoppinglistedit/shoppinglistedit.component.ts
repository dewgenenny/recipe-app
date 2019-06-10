import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {initNgModule} from "@angular/core/src/view/ng_module";


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {


  @Output() addNewIngredients = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  newIngredients(name: string, amount: string)
  {
    const ingredients = new Ingredient(name, +amount);
    ingredients.name = name;
    ingredients.amount = +amount;
    this.addNewIngredients.emit(ingredients);

  }

}
