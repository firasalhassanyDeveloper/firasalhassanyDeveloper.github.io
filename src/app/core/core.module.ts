import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import {RouterModule} from "@angular/router";
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SectionComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [HeaderComponent, FooterComponent, CarouselComponent, SectionComponent]
})
export class CoreModule { }
