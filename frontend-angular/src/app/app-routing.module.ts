import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroceryComponent } from './components/grocery/grocery.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LayoutWithNavComponent } from './components/layout-with-nav/layout-with-nav.component';
import { LayoutWithoutNavComponent } from './components/layout-without-nav/layout-without-nav.component';

 const routes: Routes = [
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
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
