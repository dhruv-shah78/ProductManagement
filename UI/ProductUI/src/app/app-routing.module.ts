import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { AddEditManufactureComponent } from './manufacture/add-edit-manufacture/add-edit-manufacture.component';

const routes: Routes = [
  { path: '', component: ManufactureComponent },
  { path: 'manufacture', component: ManufactureComponent },
  { path: 'add-edit-manufacture', component: AddEditManufactureComponent },
  { path: 'add-edit-manufacture/:id', component: AddEditManufactureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
