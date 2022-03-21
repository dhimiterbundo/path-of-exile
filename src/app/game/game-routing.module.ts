import { SearchPageComponent } from './search-page/search-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {path: 'search', component: SearchPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameModule {}
