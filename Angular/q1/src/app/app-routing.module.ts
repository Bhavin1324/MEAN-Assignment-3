import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: DataComponent },
  { path: 'list', component: ListComponent },
  { path: 'userform', component: FormComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
