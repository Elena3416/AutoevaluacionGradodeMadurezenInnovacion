import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  Titulo:string = 'Autoevaluación - Grado de Madurez en Innovación';
  PaginaInicial:string = 'Página Inicial';
  RegistroUsuario:string = 'Registrar Usuario';
  InicioSesion:string = 'Inicio Sesión';
  Contacto:string = "Contacto";
  imagen:string = "./../../../assets/IMG/logo.jpg";

  constructor() { }

  ngOnInit(): void {
  }
}