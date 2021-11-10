import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  irDashboard():void{
    //guardamos los datos en el formulario o hacemos una logica
    //redireccionamos
    this.route.navigate(['/dashboard']);
  }

}
