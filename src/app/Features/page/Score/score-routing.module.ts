import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreCreateComponent } from './score-create/score-create.component';
import { ScoreEditComponent } from './score-edit/score-edit.component';
import { ScoreListComponent } from './score-list/score-list.component';

const routes: Routes = [
  {path:'score-list', component: ScoreListComponent},
  {path:'score-create', component: ScoreCreateComponent},
  {path:'score-edit/:id', component: ScoreEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }
