import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { HomeComponent } from './pages/home/home.component';
import { BehandlingComponent } from './pages/behandling/behandling.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrijzenComponent } from './pages/prijzen/prijzen.component';
import { ResultatenComponent } from './pages/resultaten/resultaten.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BehandlingComponent,
    ContactComponent,
    PrijzenComponent,
    ResultatenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
