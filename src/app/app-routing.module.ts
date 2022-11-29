import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliadoFormComponent } from './components/afiliado-form/afiliado-form.component';
import { AfiliadoListComponent } from './components/afiliado-list/afiliado-list.component';

const routes: Routes = [
  {
    path:'usuario/new',
    component: AfiliadoFormComponent    
  },
  {
    path:'usuarios',
    component: AfiliadoListComponent    
  },
  {
    path:'',
    redirectTo:'/usuario/new',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
