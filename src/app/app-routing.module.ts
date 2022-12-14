import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'usuario',
    loadChildren: () => import('./administracion-usuarios/administracion-usuarios.module').then(m => m.AdministracionUsuariosModule)
  },
  {
    path:'',
    redirectTo:'usuario',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
