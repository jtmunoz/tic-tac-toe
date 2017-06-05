import { Component, Input} from '@angular/core';


import { NavController } from 'ionic-angular';
import { CellComponent } from '../../components/cell/cell';
import { RowComponent  } from '../../components/row/row';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [RowComponent]
})

	// let cell: new CellComponent

export class HomePage {
	

	constructor(public navCtrl: NavController) {}
	
	clickMessage ='';
	// <ion-icon name="radio-button-off"></ion-icon>

	placeCell() {
		this.clickMessage = "close"
	}
	
}



