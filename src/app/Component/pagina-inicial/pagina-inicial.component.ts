import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  public ImagenPrincipal:string = "./../../../assets/IMG/Agroalim.png";
  
  constructor() { }

  ngOnInit(): void {
  }
}