import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { TourComponent } from './tour/tour.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterNavComponent,
    MainHeaderComponent,
    HeaderNavComponent,
    TourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
