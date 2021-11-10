import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario2 } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  email!:string;
  gender!:string;
  id!:string;
  name!:string;
  status!:string;

  loading:boolean = true;

  imgUrl:string = 'https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg';

  constructor(private aRoute:ActivatedRoute, private usuarioService: UsuarioService) {
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario():void{
    this.usuarioService.getUsuario(this.id).subscribe( (resul:Usuario2) => {

      this.email = resul.data.email;
      this.gender = resul.data.gender;
      this.name = resul.data.name;
      this.status = resul.data.status;

      this.loading = false;

    });
  }

}
