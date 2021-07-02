import { Router } from '@angular/router';
import { MessageerrorsService } from './../../../../Services/messageerrors.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  public Titulo:string = "Nueva Contraseña";
  public Mensaje:string = "Si olvidaste tu contraseña, en este apartado, tienes la opción de cambiar tu contraseña.";
  public NewPassword:string = "Nueva contraseña: *";
  public ConfirmPassword:string = "Confirma tu contraseña: *";
  public BtnSavePassword:string = "Guardar Nueva Contraseña";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
  public formulario!:FormGroup;
  password:any;

  constructor(private AWMgsError:MessageerrorsService, private UsuarioService:UsuarioService,
    private router:Router, private toastr:ToastrService) { }

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

   Registrarusuarioempleado(){
   const changepassword: any = {
      password: this.formulario.get("confirmarpassword")?.value,
      confirmarpassword: this.formulario.get("confirmarpassword")?.value,
   }
    this.UsuarioService.SaveUsuario(changepassword).subscribe(data => {
      this.password = data;  
      this.toastr.success("Cambio Contraseña","Cambio Contraseña Exitosamente");   
    }, error => {
      console.log(error)
    });
}
}