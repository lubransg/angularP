
import { UsuariosService } from './usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuarios[];
  usuario: Usuarios;
  constructor(private usuariosSrv: UsuariosService) {
    this.usuariosSrv.getUsuarios()
    .then((d: Usuarios[])=> {
      this.usuarios = d;
    })
  }

  ngOnInit() {
  }

  seleccionar(usuario){
    this.usuario = usuario;
  }

}
