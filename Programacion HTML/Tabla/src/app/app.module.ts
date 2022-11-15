import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseComponent } from './database/database.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from "angular-datatables";
import{HttpClientModule}from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
