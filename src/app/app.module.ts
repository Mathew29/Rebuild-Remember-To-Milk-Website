import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';
// import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { TourComponent } from './tour/tour.component';
import { NewComponent } from './new/new.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { HelpComponent } from './help/help.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    FooterNavComponent,
    MainHeaderComponent,
    HeaderNavComponent,
    TourComponent,
    NewComponent,
    UpgradeComponent,
    HelpComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
