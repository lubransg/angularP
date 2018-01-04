import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  frmRegistro: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.frmRegistro = this.fb.group({
      nombre: ['', Validators.required],
      clave: ['', Validators.required],
      confirmar: ['', Validators.required],
    });
  }
  ngOnInit() {
  }
  registro(){
    
  }
}
