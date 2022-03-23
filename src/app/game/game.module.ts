import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ItemsDialogComponent } from './items-dialog/items-dialog.component';



@NgModule({
  declarations: [SearchPageComponent, ItemsDialogComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    FlexLayoutModule,
    CommonModule,
  ]
})
export class GameModule { }
