import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }
  getUsuarios(){
    return this.http.get('api/Usuarios').toPromise();
  }

}
