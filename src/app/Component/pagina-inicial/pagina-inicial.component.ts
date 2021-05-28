import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  public logo:string = "assets/IMG/logo2.jpg";
  public titulo:string = "Nuevo León 4.0";
  public Autoevaluacion:string = "Autoevaluación";
  public Madurez:string = "Grado de Madurez en Innovación";
  public imagen:string = "assets/IMG/graficos.jpg";
  public parrafo1:string = "Bienvenido a nuestra página de Autoevaluación, Grado de Madurez en Innovación";
  public parrafo2:string = "Eres emprendedor, pero no sabes ¿En qué grado de madurez está tu empresa en relación a la economía que hoy vivimos hoy en día?";
  public parrafo3:string = "No te preocupes más, éstas en la página correcta, aquí podrás registrar tu empresa, completar una encuesta, e inmediatamente visualizarás una gráfica de acuerdo a lo que completaste en la encuesta y así tendrás conocimiento del grado de madurez de tu empresa. Así que no esperes más únete con nosotros.";
  public parrafo4: string = "¡Registrate!, ¡Te esperamos!";
  public btnregistrate:string = "REGÍSTRATE";
  public btniniciasesion:string = "INICIA SESIÓN";
  public iniciarsesion:string = "Iniciar sesión";
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  routerTo(r:string){
    this.router.navigateByUrl(r);
  }
}