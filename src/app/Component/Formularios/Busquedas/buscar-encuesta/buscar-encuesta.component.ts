import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';

@Component({
  selector: 'app-buscar-encuesta',
  templateUrl: './buscar-encuesta.component.html',
  styleUrls: ['./buscar-encuesta.component.css']
})
export class BuscarEncuestaComponent implements OnInit {

  public Titulo:string = "Búsqueda Encuesta";
  public Mensaje:string = "En este apartado, podrás buscar la encuesta y modificarla, se buscará por el número de versión de encuesta.";
  public Etiqueta:string = "Número de versión por encuesta: *"
  public btnBuscarEncuesta:string = "Buscar encuesta";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
  public formulario! : FormGroup;

  constructor(private AWMsgErrors:MessageerrorsService, private router:Router) { }

  ngOnInit(): void {
    this.CrearForm();
  }

  public CrearForm():void {
    this.formulario = new FormGroup({

      numeroencuesta: new FormControl(null,
        [
          RxwebValidators.required(),
          RxwebValidators.digit()
      ])
    });
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return { error: undefined};
    if(!this.formulario.controls[control].touched) return { message: undefined};

    return this.AWMsgErrors.ErrorMessage(this.formulario.controls[control].errors);
  }

  public updatesurvey():void {
    this.router.navigate(["modificarencuesta"]);
  }

  public deletesurvey(): void {
    this.router.navigate(["eliminarencuesta"]);
  }
}