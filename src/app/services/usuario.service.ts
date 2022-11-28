import { Injectable } from '@angular/core';
import { ResultUsuario, Usuario } from '../interfaces/afiliado';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioGuardados: Usuario[] = [];

  constructor(private http:HttpClient) { }

  insertUsuario(nombre: string, apellido:string, email:string, administrador:boolean){

    let input = JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      email: email,
      administrador: administrador
    });

    if(input){
      this.usuarioGuardados.push(JSON.parse(input))
      localStorage.setItem('usuarios',JSON.stringify(this.usuarioGuardados));
    }

    // this.http.post<any>(
    //   'https://xxxxx.xx/api/posts', input
    //   ).subscribe(data => {
    //     this.Id = data.id;
    // });
  }

  getUsuarios(){

    return this.usuarioGuardados;
    
    // let usuarios = window.localStorage.getItem('usuarios');
    // if(usuarios){
    //    return <Usuario[]>JSON.parse(usuarios);       
    // }    
    // return <Usuario[]>[];
  }
}
