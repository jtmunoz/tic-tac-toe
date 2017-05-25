import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CellComponent } from '../../components/cell';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [CellComponent]
})

export class HomePage {
  constructor(public navCtrl: NavController) {}
}


