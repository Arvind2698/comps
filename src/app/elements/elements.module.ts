import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { ElementPlaceholderComponent } from './element-placeholder/element-placeholder.component';

import { SharedModule } from '../shared/shared.module';
import { ElementSegmentComponent } from './element-segment/element-segment.component';

@NgModule({
  declarations: [
    ElementHomeComponent,
    ElementPlaceholderComponent,
    ElementSegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class ElementsModule { }
