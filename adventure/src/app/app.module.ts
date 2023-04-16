import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFunctionalityModule } from './app-functionality-module/app-functionality-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFunctionalityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
