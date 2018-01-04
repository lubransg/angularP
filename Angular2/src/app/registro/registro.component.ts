import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuarios } from '../usuarios/usuarios';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
  frmRegistro: FormGroup;
  constructor(private fb: FormBuilder,
  private usuariosSrv: UsuariosService) { 
    this.frmRegistro = this.fb.group({
      nombre: ['', Validators.required],
      clave: ['', Validators.required],
      confirmar: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  validacion(){
    const frm = this.frmRegistro.value;
    if (frm.confirmar == frm.clave){
      return true;
    }else{
      return false;
    }
  }

  registro(){
    const frm = this.frmRegistro.value;
    let usuario = new Usuarios();
    usuario.name = frm.nombre;
    usuario.clave = frm.clave;

    this.usuariosSrv.grabar(usuario).then();
  }

}
