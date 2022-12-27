import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCreateComponent } from './list-create/list-create.component';
import { ListComponent } from './list/list.component';
import { ListEditComponent } from './list-edit/list-edit.component';


@NgModule({
  declarations: [
    ListCreateComponent,
    ListComponent,
    ListEditComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
