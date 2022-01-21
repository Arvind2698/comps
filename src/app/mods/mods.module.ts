import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModsModelComponent } from './mods-model/mods-model.component';
import { ModsAccordionComponent } from './mods-accordion/mods-accordion.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ModsHomeComponent,
    ModsModelComponent,
    ModsAccordionComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
