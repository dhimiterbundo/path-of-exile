import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';
import { MaterialModule } from '../material-module/material-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MaterialModule],
  providers: [GameService],
})
export class SharedModule { }
