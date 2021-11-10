import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, Usuario2 } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string = 'https://gorest.co.in/public/v1/users';

  constructor(private http:HttpClient) {}

getUsuarios():Observable<Usuario>{
  return this.http.get<Usuario>(this.url);
}

getUsuario(indice:string):Observable<Usuario2>{
  return this.http.get<Usuario2>(this.url+"/"+indice);
}

}
