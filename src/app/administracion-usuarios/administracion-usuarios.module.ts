import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionUsuariosRoutingModule } from './administracion-usuarios-routing.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { PreviewComponent } from './components/preview/preview.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdministracionUsuariosRoutingModule
  ]
})
export class AdministracionUsuariosModule { }
