import { Component, Input } from '@angular/core';
import { Usuario } from '../../../interfaces/afiliado';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() usuariosGuardados: Usuario[] = [];

  constructor(private usuarioService:UsuarioService) {
    this.usuariosGuardados = this.usuarioService.getUsuarios();
  }

  OnInit(){
    console.log('oninit');
    this.usuariosGuardados = this.usuarioService.getUsuarios();
  }
}
