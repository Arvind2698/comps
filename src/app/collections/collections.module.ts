import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CollectionTableComponent } from './collection-table/collection-table.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CollectionHomeComponent,
    CollectionTableComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule

  ],
  exports:[]
})
export class CollectionsModule { }
