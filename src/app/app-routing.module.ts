import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BehandlingComponent} from "./pages/behandling/behandling.component";
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {'breadcrumb': 'Home'}},
  {path: '',  component: HomeComponent, data: {'breadcrumb': 'Home'}},
  {path: 'behandling', component: BehandlingComponent, data: {'breadcrumb': 'Behandling'}},
  {path: 'contact', component: ContactComponent, data: {'breadcrumb': 'Contact'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
