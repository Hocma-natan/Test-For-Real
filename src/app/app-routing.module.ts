import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComputComponent } from './components/add-comput/add-comput.component';
import { ComputDetailComponent } from './components/comput-detail/comput-detail.component';
import { EditComputComponent } from './components/edit-comput/edit-comput.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard',    component: DashboardComponent},
  { path: 'addComput',    component: AddComputComponent},
  { path: 'computDetails/:id',    component: ComputDetailComponent},
  { path: 'editComput/:id',    component: EditComputComponent},
  { path: '**',    component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
