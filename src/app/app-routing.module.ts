import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'game',
        pathMatch: 'full'
      },
      { path: 'game', loadChildren: () => import('./game/game-routing.module').then(m => m.GameModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
