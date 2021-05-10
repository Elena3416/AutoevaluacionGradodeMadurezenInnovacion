import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageerrorsService } from './../../Services/messageerrors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {

  //informacion del html
  public RegEmpresa:string = "Registro de Empresa";
  public Identificacion:string = "Ingresa el RFC de la Empresa:";
  public NombreEmpresa:string = "Ingresa el Nombre de la Empresa:";
  public Cluster:string = "Ingresa el/los clústers al que pertenece la Empresa:";
  public GiroEmpresa:string = "Ingresa el Giro de la Empresa:";
  public Pais:string = "Selecciona País:";
  public Estado:string = "Selecciona Estado:"
  public Municipio:string = "Selecciona Municipio";
  public ButtonRegEmpresa:string = "Registrar Empresa";

  //propiedad formulario
  public formulario!:FormGroup;

  constructor(private AWMsgError:MessageerrorsService) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  public CreateForm(){
    this.formulario = new FormGroup({

      rfc: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.upperCase(),
        RxwebValidators.alphaNumeric(),
        RxwebValidators.maxLength({value:13})
      ]),

      nombreempresa: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
        RxwebValidators.minLength({value:5}),
        RxwebValidators.maxLength({value:30})
      ]),

      cluster: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
        RxwebValidators.minLength({value:5}),
        RxwebValidators.maxLength({value:30})
      ]),

      giroempresa: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
        RxwebValidators.minLength({value:5}),
        RxwebValidators.maxLength({value:30})
      ]),

      pais: new FormControl(null, [
        RxwebValidators.required()]),

      estado: new FormControl(null, [
        RxwebValidators.required()]),
        
      municipio: new FormControl(null, [
        RxwebValidators.required()]),  
    });
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return {error:undefined};
    if(!this.formulario.controls[control].touched) return {message:undefined};

    return this.AWMsgError.ErrorMessage(this.formulario.controls[control].errors);
  }
}
