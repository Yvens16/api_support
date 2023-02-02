import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantComponent } from './enfant/enfant.component';
import { ParentComponent } from './parent/parent.component';
import { BeerchildComponent } from './beerchild/beerchild.component';


@NgModule({
  declarations: [
    AppComponent,
    EnfantComponent,
    ParentComponent,
    BeerchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
