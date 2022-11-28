import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/afiliado';

@Component({
  selector: 'app-afiliado-list',
  templateUrl: './afiliado-list.component.html',
  styleUrls: ['./afiliado-list.component.css']
})
export class AfiliadoListComponent {

  @Input() usuariosGuardados: Usuario[] = [];

  constructor(private usuarioService:UsuarioService) { 
    this.usuariosGuardados = this.usuarioService.getUsuarios();
  }  

  OnInit(){
    console.log('oninit');
    this.usuariosGuardados = this.usuarioService.getUsuarios();
  }
}
