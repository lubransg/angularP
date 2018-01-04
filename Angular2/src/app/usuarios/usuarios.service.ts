import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Usuarios } from './usuarios';

@Injectable()
export class UsuariosService {
  api: string  = 'api/usuarios';
  headers = new HttpHeaders({'Content-type': 'application/json'});
  constructor(private http: HttpClient) { }
  getUsuarios(){
    return this.http.get(this.api).toPromise();
  }

  grabar(usuario: Usuarios){
    return this.http.post(this.api,
      JSON.stringify(usuario),
      {headers: this.headers}).toPromise();
  }

  borrar(id: number){
    return this.http.delete(this.api+'/'+id,{
      headers: this.headers 
    });
  }

}
