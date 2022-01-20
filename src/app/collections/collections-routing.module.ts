import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionHomeComponent } from './collection-home/collection-home.component';

import { BiographyComponent } from './collection-tabs/biography/biography.component';
import { CompaniesComponent } from './collection-tabs/companies/companies.component';
import { PartnersComponent } from './collection-tabs/partners/partners.component';

const routes: Routes = [
  {
    path:"",
    component:CollectionHomeComponent,
    children:[
      {
        path:"",
        component:BiographyComponent
      },
      {
        path:"companies",
        component:CompaniesComponent
      },
      {
        path:"partners",
        component:PartnersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {  }
