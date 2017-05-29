import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FirebaseModule} from './firebase/firebase.module';
import {Router} from "@angular/router";
import {Approute} from "./approute";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirebaseModule,
    Approute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
