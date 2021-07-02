import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  public TituloEmpresas: string = "Registrar Encuestas";
  public Texto: string = "En este apartado, habrá una serie de preguntas relacionadas a tu empresa, está encuesta esta compuesta por diez preguntas, y están relacionadas con opción múltiple de menor a mayor, donde la primera opción es completamente de acuerdo y la última opción es completamente en desacuerdo, No esperes más ¡Comenzamos!.";
  public btnFinalizar: string = "Completar Encuesta";
  public pregunta1: string = "1.-¿Cuánto tiempo llevas utilizando nuestro producto/servicio?";
  public pregunta2: string = "2.-¿Con qué frecuencia utilizas nuestro producto/servicio?";
  public pregunta3: string = "3.-En general, ¿qué tan satisfecho está usted con nuestro producto/servicio?";
  public pregunta4: string = "4.-¿Utilizarías / comprarían nuestro producto / servicio de nuevo?";
  public pregunta5: string = "5.-¿Cuáles son las razones por las que puedes elegir nuestro producto/servicio?";
  public pregunta6: string = "6.-¿Cuál es la razón por la que no puedes elegir nuestro producto/servicio?";
  public pregunta7: string = "7.-¿Cuán probable es que escojas nuestro producto/servicio sobre los productos de la competencia en el mercado?";
  public pregunta8: string = "8.-¿Qué método utilizaste para comprar el producto/servicio?";
  public pregunta9: string = "9-.¿Fue fácil el proceso de transacción?";
  public pregunta10: string = "10.-¿Estarías dispuesto a volver con nosotros si mejoramos las áreas con las que no estabas satisfecho?"

  selectedStatus1: number = 1;
  selectedStatus2: number = 7;
  selectedStatus3: number = 13;
  selectedStatus4: number = 19;
  selectedStatus5: number = 25;
  selectedStatus6: number = 30;
  selectedStatus7: number = 35;
  selectedStatus8: number = 40;
  selectedStatus9: number = 46;
  selectedStatus10: number = 51;

  public formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.PrimeraPregunta();
  }

  public PrimeraPregunta(): void {
    this.formulario = new FormGroup({

      preguntauno: new FormControl(),
      preguntados: new FormControl(),
      preguntatres: new FormControl(),
      preguntacuatro: new FormControl(),
      preguntacinco: new FormControl(),
      preguntaseis: new FormControl(),
      preguntasiete: new FormControl(),
      preguntaocho: new FormControl(),
      preguntanueve: new FormControl(),
      preguntadiez: new FormControl(),
    });
    this.selectedStatus1 = 0;
    this.selectedStatus2 = 0;
    this.selectedStatus3 = 0;
    this.selectedStatus4 = 0;
    this.selectedStatus5 = 0;
    this.selectedStatus6 = 0;
    this.selectedStatus7 = 0;
    this.selectedStatus8 = 0;
    this.selectedStatus9 = 0;
    this.selectedStatus10 = 0;
  }
}