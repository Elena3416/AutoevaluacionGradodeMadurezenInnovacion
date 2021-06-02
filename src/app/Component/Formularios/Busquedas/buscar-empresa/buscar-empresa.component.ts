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
  public Titulo:string = "Búsqueda Empresa";
  public Mensaje:string = "En este apartado, puedes modificar algún dato de tu empresa, buscándola por el RFC de tu empresa.";
  public Etiqueta:string = "RFC de la empresa: *"
  public btnBuscarEmpresa:string = "Buscar empresa";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
  public formulario! : FormGroup;
  public opcion:string =  "Selecciona una opción";
  public industria: string = "Por la industria";
  public cluster: string = "Por el clúster";
  public estado: string = "Por el estado";
  public pais: string = "Por el país";

  constructor(private AWMsgErrors:MessageerrorsService, private router:Router) { }

  ngOnInit(): void {
    this.CrearForm();
  }

  public CrearForm():void {
    this.formulario = new FormGroup({

      filtros: new FormControl(null,
        [
          RxwebValidators.required(),
          RxwebValidators.requiredTrue()])
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