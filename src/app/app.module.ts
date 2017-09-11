import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
