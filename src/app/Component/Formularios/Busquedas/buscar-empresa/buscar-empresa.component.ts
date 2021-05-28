import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';

@Component({
  selector: 'app-buscar-empresa',
  templateUrl: './buscar-empresa.component.html',
  styleUrls: ['./buscar-empresa.component.css']
})
export class BuscarEmpresaComponent implements OnInit {
  public Titulo:string = "Búsqueda empresa";
  public Mensaje:string = "En éste apartado, puedes modificar algún dato de tu empresa, búscandola por el RFC de tu empresa";
  public Etiqueta:string = "Busca el RFC de la empresa:"
  public btnBuscarEmpresa:string = "Buscar empresa";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
  public formulario! : FormGroup;

  constructor(private AWMsgErrors:MessageerrorsService, private router:Router) { }

  ngOnInit(): void {
    this.CrearForm();
  }

  public CrearForm():void {
    this.formulario = new FormGroup({

      rfcempresa: new FormControl(null,
        [
          RxwebValidators.required(),
          RxwebValidators.pattern({ expression: { onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/ } }),
          RxwebValidators.maxLength({ value: 13 })])
    });
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return { error: undefined};
    if(!this.formulario.controls[control].touched) return { message: undefined};

    return this.AWMsgErrors.ErrorMessage(this.formulario.controls[control].errors);
  }

  public updatecompany():void{
    this.router.navigate(["modificarempresa"]);
  }

  public deletecompany():void{
    this.router.navigate(["eliminarempresa"]);
  }
}
