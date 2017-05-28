import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell';


/*
  Generated class for the Row component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'row',
  templateUrl: 'row.html'
})

export class RowComponent {

  text: string;

  constructor() {
    console.log('Hello Row Component');
    this.text = 'Hello World';
  }

}
