import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroceryAlertBoxComponent } from './components/grocery-alert-box/grocery-alert-box.component';
import { GroceryCardComponent } from './components/grocery-card/grocery-card.component';
import { GroceryCardSkeletonComponent } from './components/grocery-card-skeleton/grocery-card-skeleton.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LayoutWithNavComponent } from './components/layout-with-nav/layout-with-nav.component';
import { LayoutWithoutNavComponent } from './components/layout-without-nav/layout-without-nav.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutWithoutNavComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ]
  },
  {
    path: '',
    component: LayoutWithNavComponent,
    children: [
      {path: 'groceries', component: GroceryComponent},
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GroceryAlertBoxComponent,
    GroceryCardComponent,
    GroceryCardSkeletonComponent,
    GroceryListComponent,
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
