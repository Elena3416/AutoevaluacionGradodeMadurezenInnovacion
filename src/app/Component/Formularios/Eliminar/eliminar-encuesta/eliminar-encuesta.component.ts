import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';

@Component({
  selector: 'app-eliminar-encuesta',
  templateUrl: './eliminar-encuesta.component.html',
  styleUrls: ['./eliminar-encuesta.component.css']
})
export class EliminarEncuestaComponent implements OnInit {

  public Titulo:string = "Eliminar encuesta";
  public Mensaje:string = "En éste apartado, sólo el administrador podrá buscar la encuesta y eliminar, antes de haber sido contestada y guardada";
  public Etiqueta:string = "Busca el número de versión por encuesta: *"
  public btnEliminarEncuesta:string = "Eliminar encuesta";
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
}