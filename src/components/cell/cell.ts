import { Component } from '@angular/core';

/*
  Generated class for the Cell component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'cell',
  templateUrl: 'cell.html'
})
export class CellComponent {

  clickMessage = '';

  placeCell() {
    this.clickMessage = 'X'
  }

}
