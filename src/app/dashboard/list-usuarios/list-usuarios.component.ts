import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Datum } from '../../interfaces/usuario.interface';


@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  listUsuarios: Array<Datum> =  [];

  loading:boolean = true;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios():void{
    this.usuarioService.getUsuarios().subscribe( res => {
      this.listUsuarios = res.data;
      this.loading = false;
    });
  }

}
