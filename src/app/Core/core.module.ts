import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteralsPipe } from './pipes/LiteralsPipe/literals.pipe';
import { AssistancePipe } from './pipes/AssistancePipe/assistance.pipe';

const pipes = [
  LiteralsPipe,
  AssistancePipe
]

@NgModule({
  declarations: [
    ...pipes
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...pipes
  ]
})
export class CoreModule { }
