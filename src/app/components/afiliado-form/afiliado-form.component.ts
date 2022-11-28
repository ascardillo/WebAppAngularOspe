import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-afiliado-form',
  templateUrl: './afiliado-form.component.html',
  styleUrls: ['./afiliado-form.component.css']
})
export class AfiliadoFormComponent {

  constructor(private usuarioService:UsuarioService) { }

  onClickSubmit(formUsuario: NgForm) {

    if(formUsuario.valid){

      this.usuarioService.insertUsuario(
        formUsuario.form.controls['nombre'].value,
        formUsuario.form.controls['apellido'].value,
        formUsuario.form.controls['email'].value,
        formUsuario.form.controls['ckbAdministrador'].value
        );

      formUsuario.reset();
    } else {
      
    }

    return false;
  }

}
