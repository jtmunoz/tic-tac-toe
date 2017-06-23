import { Component, Input} from '@angular/core';


import { NavController } from 'ionic-angular';
import { CellComponent } from '../../components/cell/cell';
import { RowComponent  } from '../../components/row/row';
import { GamePage } from '../game/game';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [RowComponent, GamePage]
})

export class HomePage {	
	constructor(public navCtrl: NavController) {}
	pushPage(){
    this.navCtrl.push(GamePage);
  }
	clickMessage ='';
	// <ion-icon name="radio-button-off"></ion-icon>

	placeCell() {
		this.clickMessage = "close"
	}
	
}



