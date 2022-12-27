import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},

  {
    path: 'list',
    loadChildren: () =>
      import('./List/list.module').then((m) => m.ListModule)
  },
  {
    path: 'score',
    loadChildren: () =>
      import('./Score/score.module').then((m) => m.ScoreModule)
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./Students/students.module').then((m) => m.StudentsModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
