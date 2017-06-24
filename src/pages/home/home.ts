import { Component, Input} from '@angular/core';


import { NavController} from 'ionic-angular';
import { CellComponent } from '../../components/cell/cell';
import { RowComponent  } from '../../components/row/row';
import { GamePage } from '../game/game';
import { FormsModule} from '@angular/forms';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [RowComponent, GamePage]
})

export class HomePage {	
	constructor(private navController: NavController) {}

	choice: String;

	pushPage(event){
    this.navController.push(GamePage,{
    	choice: 'll'
    });
  }



	
}



