import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HerosComponent } from './heros/heros.component';

import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
    MessageComponent,
    DashboarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
