import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { ElementsModule } from '../elements/elements.module';


@NgModule({
  declarations: [
    CollectionHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    ElementsModule

  ],
  exports:[]
})
export class CollectionsModule { }
