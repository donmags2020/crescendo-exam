import { HttpClientModule } from '@angular/common/http';
import { NgModule, ResolvedReflectiveFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestService } from './rest.service';
import { DetailsrecipeComponent } from './detailsrecipe/detailsrecipe.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
