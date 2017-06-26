import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  choice1: string;

  constructor(private navController: NavController, private navParams: NavParams) {
    this.choice1 = navParams.get('choice'); 
  }    
 


}
