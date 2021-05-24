import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  public TituloEmpresas:string = "Encuestas para empresas";
  public Texto:string = "Este apartado se utiliza para contestar las encuestas de tu empresa";
  public btnFinalizar:string = "Finalizar Encuesta";
  public formulario!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
