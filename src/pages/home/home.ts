// import { Component, Input} from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CellComponent } from '../../components/cell/cell';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CellComponent]
})

export class HomePage {
	@Input() cell: CellComponent

	constructor(public navCtrl: NavController) {}
	clickMessage ='';

	placeCell1() {
		this.clickMessage ='X'
	}
	
	@Output()
  change: EventEmitter<stringr> = new EventEmitter<string>();

	
}



