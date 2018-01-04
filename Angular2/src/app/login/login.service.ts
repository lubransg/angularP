import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Verifica } from './verifica';
import { VariableService } from '../shared/variable.service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification/notification.service';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient,
    private variableSrv: VariableService,
    private router: Router,
    private notificationSrv: NotificationService
  ) { }

  verificaAcceso(name: string, clave: string){
    this.http.get<Verifica>('api/verificaUsuarios/'+name+'/'+clave)
    .subscribe((d)=>{
      if(d.existe){
        this.variableSrv.bLoggIn.next(true);
        this.router.navigate(['usuario']);
      }else{
        this.notificationSrv.show('error', 'Correo o clave erroneos');
      }
      //console.log(d)
    }); 
  }
}
