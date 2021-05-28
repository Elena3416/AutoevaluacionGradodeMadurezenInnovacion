import { Router } from '@angular/router';
import { MessageerrorsService } from './../../../../Services/messageerrors.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  public Titulo:string = "Ingresar nueva contraseña";
  public Mensaje:string = "Si olvidaste tu contraseña, en éste apartado, tienes la opción de cambiar tu contraseña.";
  public NewPassword:string = "Ingresa tu nueva contraseña: *";
  public ConfirmPassword:string = "Confirma tu contraseña: *";
  public BtnSavePassword:string = "Guardar Contraseña";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
  public formulario!:FormGroup;

  constructor(private AWMgsError:MessageerrorsService, 
    private router:Router) { }

  ngOnInit(): void {
    this.Createform();
  }

  public Createform():void{
    this.formulario = new FormGroup({

      password: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.password({validation:{maxLength:10, minLength:8, digit:true, specialCharacter:true}})]),  
       
      confirmarpassword: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.password({validation: {maxLength: 10, minLength:8, digit:true, specialCharacter:true}}),
        RxwebValidators.compare({fieldName:"password"})]),
    });
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return {error:undefined};
    if(!this.formulario.controls[control].touched) return {message:undefined};

    return this.AWMgsError.ErrorMessage(this.formulario.controls[control].errors);
  }

  public MenuLogin():void{
    this.router.navigate(["iniciarsesion"]);
  }
}