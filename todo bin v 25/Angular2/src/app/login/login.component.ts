import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { VariableService } from '../shared/variable.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup
  constructor(private notificaSrv: NotificationService,
    private fb: FormBuilder,
    private variableSrv: VariableService
  ) { 
    this.frmLogin = this.fb.group({
      'usuario': ['', Validators.required],
      'clave': ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  login(){
    const frm = this.frmLogin.value;
    this.variableSrv.bLoggIn.next(true);
    //alert(frm.usuario + ' ' + frm.clave);
  }

}
