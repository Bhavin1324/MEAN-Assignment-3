import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: ItemAddComponent },
  { path: 'edit/:id', component: ItemEditComponent },
  { path: 'delete/:id', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
