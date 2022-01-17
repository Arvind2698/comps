import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path:"elements",
    loadChildren:()=> import('./elements/elements.module').then(m=>m.ElementsModule)
  },
  {
    path:"collections",
    loadChildren:()=>import('./collections/collections.module').then(m=>m.CollectionsModule)
  },
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"**",
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }