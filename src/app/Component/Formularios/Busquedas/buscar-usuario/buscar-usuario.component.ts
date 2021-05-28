import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  public Titulo: string = "Búsqueda Usuario";
  public Mensaje: string = "En éste apartado, podrás buscar tu información como usuario y tendrás la oportunidad de modificar tus datos."
  public buscarusuario: string = "Buscar Usuario";
  public UserName: string = "Ingresa tu nombre de usuario:";
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

  public userupdate():void{
    this.router.navigate(["modificarusuario"]);
  }

  public userdelete():void{
    this.router.navigate(["eliminarusuario"]);
  }
}