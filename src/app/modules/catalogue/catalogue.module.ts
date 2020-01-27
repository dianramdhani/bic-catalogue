import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './page/catalogue/catalogue.component';
import { SliderComponent } from './component/slider/slider.component';
import { Feature1Component } from './component/feature1/feature1.component';
import { Feature2Component } from './component/feature2/feature2.component';
import { Feature3Component } from './component/feature3/feature3.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { FaqsComponent } from './component/faqs/faqs.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { ScreenshotComponent } from './component/screenshot/screenshot.component';
import { MoreFeaturesComponent } from './component/more-features/more-features.component';
import { ServicesComponent } from './component/services/services.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    CatalogueComponent,
    SliderComponent,
    Feature1Component,
    Feature2Component,
    Feature3Component,
    PricingComponent,
    FaqsComponent,
    TestimonialComponent,
    ScreenshotComponent,
    MoreFeaturesComponent,
    ServicesComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
