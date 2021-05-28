import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-encuesta',
  templateUrl: './modificar-encuesta.component.html',
  styleUrls: ['./modificar-encuesta.component.css']
})
export class ModificarEncuestaComponent implements OnInit {

  public TituloEmpresas:string = "Encuestas para empresas";
  public Texto:string = "En éste apartado, habrá una serie de preguntas relacionadas a tu empresa, esta encuesta esta compuesta por diez preguntas, y estan relacionadas con opción multiple de menor a mayor, donde la primera opción es completamente de acuerdo y la última opción es completamente en desacuerdo, No esperes más ¡Comenzamos!.";
  public btnFinalizar:string = "Completar Encuesta";
  public pregunta1:string = "1.-¿Cuánto tiempo llevas utilizando nuestro producto/servicio?";
  public pregunta2:string = "2.-¿Con qué frecuencia utilizas nuestro producto/servicio?";
  public pregunta3:string = "3.-En general, ¿qué tan satisfecho está usted con nuestro producto/servicio?";
  public pregunta4:string = "4.-¿Utilizarías / comprarías nuestro producto / servicio de nuevo?";
  public pregunta5:string = "5.-¿Cuáles son las razones por las que puedes elegir nuestro producto/servicio?";
  public pregunta6:string = "6.-¿Cuál es la razón por la que no puedes elegir nuestro producto/servicio?";
  public pregunta7:string = "7.-¿Cuán probable es que escojas nuestro producto/servicio sobre los productos de la competencia en el mercado?";
  public pregunta8:string = "8.-¿Qué método utilizaste para comprar el producto/servicio?";
  public pregunta9:string = "9-.¿Fue fácil el proceso de transacción?";
  public pregunta10:string = "10.-¿Estarías dispuesto a volver con nosotros si mejoramos las áreas con las que no estabas satisfecho?"

  public formulario!:FormGroup;


  constructor(fb: FormBuilder) {
  this.formulario = fb.group({
    pregunta1: ['', Validators.required]
  });
}

  ngOnInit(): void {
  }
}
