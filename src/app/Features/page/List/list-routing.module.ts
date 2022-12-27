import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCreateComponent } from './list-create/list-create.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'list-list', component: ListComponent},
  {path:'list-create', component: ListCreateComponent},
  {path:'list-edit/:id', component: ListEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
