import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { PrintLinesDirective } from './print-lines.directive';

@NgModule({
  declarations: [
    DividerComponent,
    PrintLinesDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DividerComponent,
    PrintLinesDirective
  ]
})
export class SharedModule { }
