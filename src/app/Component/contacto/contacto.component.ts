import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageerrorsService } from './../../Services/messageerrors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    //informacion del html
    public Contacto:string = "Contacto";
    public Correo:string = "Correo*:";
    public Asunto:string = "Asunto*:";
    public Mensaje:string = "Mensaje:";
    public informacion:string = "Si necesitas más información contáctanos";
    public correo: string = "Correo: info@agroalim.org";
    public telefono:string = "Teléfono: 8183452210";
    public EnviarMensaje:string = "Enviar Mensaje";
    public RedesSociales:string = "Siguenos en nuestra redes sociales";
    public Imagen1:string = "./../../../assets/IMG/ganaderia.png";
    public Imagen2:string = "./../../../assets/IMG/agroalimentaria.jpg";

    //propiedad formulario
    public formulario!:FormGroup;

  constructor(private AWErrMsg:MessageerrorsService) { }

  ngOnInit(): void {
    this.CrearFormulario();
  }

  CrearFormulario(){
    this.formulario = new FormGroup({

      Email: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.email(),
        RxwebValidators.minLength({value:3}),
        RxwebValidators.maxLength({value:30})]),

      asunto: new FormControl(null,[
        RxwebValidators.required(),
        RxwebValidators.minLength({value:5}),
        RxwebValidators.maxLength({value:100})]),

      Mensaje: new FormControl(null,[
        RxwebValidators.required(),
        RxwebValidators.minLength({value:5}),
        RxwebValidators.maxLength({value:200})]),
    })
}

public Validarform(control:string){
  if(!this.formulario.controls[control].touched) return {error:undefined};
  if(!this.formulario.controls[control].touched) return {message:undefined};

  return this.AWErrMsg.ErrorMessage(this.formulario.controls[control].errors);
}
}