import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { ListeTagsComponent } from './liste-tags/liste-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProjetsComponent,
    ListeTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
