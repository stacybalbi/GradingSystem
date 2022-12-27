import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoreCreateComponent } from './score-create/score-create.component';
import { ScoreEditComponent } from './score-edit/score-edit.component';
import { ScoreListComponent } from './score-list/score-list.component';
import { CoreModule } from 'src/app/Core/core.module';


@NgModule({
  declarations: [
    ScoreCreateComponent,
    ScoreEditComponent,
    ScoreListComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ScoreModule { }
