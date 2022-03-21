import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module/material-module.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    SharedModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    CommonModule
  ]
})
export class GameModule { }
