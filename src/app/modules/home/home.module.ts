import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { HomePageComponent } from './page/home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
