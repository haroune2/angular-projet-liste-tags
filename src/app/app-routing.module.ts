import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';

import { PortfolioComponent } from './portfolio/portfolio.component';

 
const routes: Routes = [
 
  { path: 'PortfolioComponent', component: PortfolioComponent },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
