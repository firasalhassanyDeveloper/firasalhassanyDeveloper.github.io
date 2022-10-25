import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { HomeComponent } from './pages/home/home.component';
import { BehandlingComponent } from './pages/behandling/behandling.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BehandlingComponent
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
