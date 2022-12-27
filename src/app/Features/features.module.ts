import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ListModule } from './page/List/list.module';
import { ScoreModule } from './page/Score/score.module';
import { StudentsModule } from './page/Students/students.module';
import { HomeModule } from './page/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../Core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ListModule,
    ScoreModule,
    StudentsModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FeaturesModule {}
