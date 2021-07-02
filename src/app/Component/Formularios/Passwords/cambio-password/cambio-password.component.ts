import { MessageerrorsService } from '../../../../Services/messageerrors.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambio-password',
  templateUrl: './cambio-password.component.html',
  styleUrls: ['./cambio-password.component.css']
})
export class CambioPasswordComponent implements OnInit {

  public CambiarPassword:string = "Cambio de Contraseña";
  public Email:string = "Correo Electrónico: *"; 
  public Informacion:string = "Si olvidaste tu contraseña, no te preocupes en este apartado, tienes la opción de crear una nueva contraseña para que puedas seguir utilizando la página.";
  public ButtonRegUsuario:string = "Cambiar Contraseña";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";

  public formulario!: FormGroup;
  log: boolean = false;

  constructor(private AWMsgErrSrv:MessageerrorsService, private router:Router) { }

  ngOnInit() {
    this.CreateForm();
  }

  public CreateForm():void{
    this.log = true;
    this.formulario = new FormGroup({

      correoelectronico: new FormControl(null,[
          RxwebValidators.email(),
          RxwebValidators.required(),
          RxwebValidators.minLength({value:3}),
          RxwebValidators.maxLength({value:30})])
    });
    this.log = false;
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return {error:undefined};
    if(!this.formulario.controls[control].touched) return {message:undefined};

    return this.AWMsgErrSrv.ErrorMessage(this.formulario.controls[control].errors);
  }
  
  NewPassword(){
    this.router.navigate(["newpassword"]);
  }
}