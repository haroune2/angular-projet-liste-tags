import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { ListeTagsComponent } from './liste-tags/liste-tags.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/projets', pathMatch: 'full' },
  { path: 'projets', component: ListeProjetsComponent },
  { path: 'tags/:id', component: ListeTagsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
