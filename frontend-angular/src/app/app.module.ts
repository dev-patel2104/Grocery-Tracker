import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroceryAlertBoxComponent } from './components/grocery-alert-box/grocery-alert-box.component';
import { GroceryCardComponent } from './components/grocery-card/grocery-card.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LayoutWithNavComponent } from './components/layout-with-nav/layout-with-nav.component';
import { LayoutWithoutNavComponent } from './components/layout-without-nav/layout-without-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GroceryAlertBoxComponent,
    GroceryCardComponent,
    GroceryComponent,
    SignInComponent,
    SignUpComponent,
    LayoutWithNavComponent,
    LayoutWithoutNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
