import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CollectionTableComponent } from './collection-table/collection-table.component';

import { SharedModule } from '../shared/shared.module';
import { CollectionTabsComponent } from './collection-tabs/collection-tabs.component';
import { BiographyComponent } from './collection-tabs/biography/biography.component';
import { CompaniesComponent } from './collection-tabs/companies/companies.component';
import { PartnersComponent } from './collection-tabs/partners/partners.component';

@NgModule({
  declarations: [
    CollectionHomeComponent,
    CollectionTableComponent,
    CollectionTabsComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule

  ],
  exports:[]
})
export class CollectionsModule { }
