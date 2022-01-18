import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { ElementPlaceholderComponent } from './element-placeholder/element-placeholder.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ElementHomeComponent,
    ElementPlaceholderComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class ElementsModule { }
