import { Component } from '@angular/core';

import { CellComponent } from '../../components/cell/cell';

/*
  Generated class for the Board component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'board',
  templateUrl: 'board.html',
  entryComponents: [CellComponent]
})
export class BoardComponent {

  public board: Array<CellComponent>;

  constructor() {}

}
