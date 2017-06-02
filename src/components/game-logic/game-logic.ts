import { Directive } from '@angular/core';

/*
  Generated class for the GameLogic directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[game-logic]' // Attribute selector
})
export class GameLogic {

  constructor() {
    console.log('Hello GameLogic Directive');
  }

}
