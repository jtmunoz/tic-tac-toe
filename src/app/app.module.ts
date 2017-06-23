import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CellComponent } from '../components/cell/cell';
import { RowComponent } from '../components/row/row';
import { BoardComponent } from '../components/board/board';
import { GameLogic } from '../components/game-logic/game-logic';
import { PlayerComponent } from '../components/player/player';
import { GamePage } from '../pages/game/game';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CellComponent,
    RowComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CellComponent,
    RowComponent,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
