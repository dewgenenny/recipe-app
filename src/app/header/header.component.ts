import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  @Output() recipesClicked = new EventEmitter<boolean>();
  @Output() shoppingListClicked = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
   // this.recipesClicked.emit(true);
  }

onRecipesClicked(){

    this.recipesClicked.emit(true);

}

onShoppingListClicked(){

    this.shoppingListClicked.emit(true);
}

}

