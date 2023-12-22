import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroceryAlertBoxComponent } from './components/grocery-alert-box/grocery-alert-box.component';
import { GroceryCardComponent } from './components/grocery-card/grocery-card.component';
import { GroceryCardSkeletonComponent } from './components/grocery-card-skeleton/grocery-card-skeleton.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryComponent } from './components/grocery/grocery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GroceryAlertBoxComponent,
    GroceryCardComponent,
    GroceryCardSkeletonComponent,
    GroceryListComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
