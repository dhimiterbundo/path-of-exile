import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [GameService],
})
export class SharedModule { }
