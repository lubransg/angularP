import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Usuarios } from '../usuarios';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-contenido',
  templateUrl: './usuarios-contenido.component.html',
  styles: []
})
export class UsuariosContenidoComponent implements OnInit, OnChanges {
  @Input() usuario: Usuarios;
  frmUsuarios: FormGroup;
  constructor(private fb: FormBuilder,
    private usuaariosSrv: UsuariosService) { 
    this.frmUsuarios = this.fb.group({
      nombre: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.usuario == undefined) return;
    this.frmUsuarios.setValue({
      nombre: this.usuario.name,
      clave: this.usuario.clave
    })
  }

  borrar(){
    if(this.usuario == undefined) return;
    this.usuaariosSrv.borrar(this.usuario.id_usuario).subscribe();
  }

}
