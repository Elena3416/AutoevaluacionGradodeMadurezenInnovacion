import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  public Titulo: string = "Eliminar Usuario";
  public eliminarusuario: string = "Eliminar Usuario";
  public UserName: string = "Nombre de usuario:";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
  public formulario!: FormGroup;

  constructor(private AWMsgErrors:MessageerrorsService, private router:Router) { }

  ngOnInit(): void {
    this.CrearForm();
  }

  public CrearForm():void {
    this.formulario = new FormGroup({

      nombreusuario: new FormControl(null,
        [
          RxwebValidators.required(),
          RxwebValidators.pattern({ expression: { onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/ } }),
          RxwebValidators.maxLength({ value: 25 })])
    });
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return { error: undefined};
    if(!this.formulario.controls[control].touched) return { message: undefined};

    return this.AWMsgErrors.ErrorMessage(this.formulario.controls[control].errors);
  }
}