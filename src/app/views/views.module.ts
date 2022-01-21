import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { ViewsListComponent } from './views-list/views-list.component';
import { ViewsStatsComponent } from './views-stats/views-stats.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    ViewsListComponent,
    ViewsStatsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
