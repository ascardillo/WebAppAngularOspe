import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
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
