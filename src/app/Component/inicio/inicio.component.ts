import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public Mensaje:string = "¡FELICIDADES!";
  public Texto:string = "Tu registro ha sido completado y ahora ya eres parte de Nuevo León 4.0. Queda en espera de nuevas noticias.";
  public imagen:string = "assets/IMG/logo_grande.png";
  public Mensaje2: string = "Juntos formaremos un mejor Nuevo León.";
  
  constructor() { }

  ngOnInit() {
  }
}
