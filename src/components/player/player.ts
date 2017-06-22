import { Component } from '@angular/core';

/*
  Generated class for the Player component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  text: string;

  constructor() {
    console.log('Hello Player Component');
    this.text = 'Hello World';
  }

}
