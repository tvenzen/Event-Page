import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EventPricingComponent } from './event-pricing/event-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EventPricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forChild({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
