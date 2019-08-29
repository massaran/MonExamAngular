import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Composant1Component } from './composant1/composant1.component';
import { Composant2Component } from './composant2/composant2.component';


const routes: Routes = [
  { path: 'produits', component: Composant1Component },
  { path: 'produits/:id', component: Composant2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
