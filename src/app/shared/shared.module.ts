import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';
import { MaterialModule } from '../material-module/material-module.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule
  ],
  exports: [MaterialModule],
  providers: [GameService],
})
export class SharedModule { }
