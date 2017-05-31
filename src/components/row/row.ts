import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell';



@Component({
  selector: 'row',
  templateUrl: 'row.html', 
  entryComponents: [CellComponent]
})



export class RowComponent {

 // public cellRow: Array<CellComponent> = [ new CellComponent, new CellComponent, new CellComponent ]


  constructor() {
    console.log('Hello Row Component');
  }

}
