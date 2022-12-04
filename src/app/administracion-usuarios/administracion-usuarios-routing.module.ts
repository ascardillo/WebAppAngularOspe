import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'list', component: ListComponent},
  {path: 'preview', component: PreviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionUsuariosRoutingModule { }
