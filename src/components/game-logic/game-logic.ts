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

  easy(){}

  medium(){}

  insane(){}

  determineDifficulty(event){
  	if (event === "easy") {
  		//pick random that is available
  		this.easy()
  	} else if ( event === "medium") {
  		// tries to choose three in a row
  		this.medium()
  	} else if ( event === "insane") {
  		//goes for the win or tie
  		this.insane()
  	}
  }

}
