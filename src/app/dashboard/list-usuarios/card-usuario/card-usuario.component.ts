import { Datum } from './../../../interfaces/usuario.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input() user!:Datum;

  nombre!:string;
  correo!:string;
  genero!:string;
  estado!:string;
  id!:number;


  imgUrl:string = 'https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg';

  constructor() { }

  ngOnInit(): void {
    this.nombre = this.user.name;
    this.correo = this.user.email;
    this.genero = this.user.gender;
    this.estado = this.user.status;
    this.id = this.user.id;
  }

}
