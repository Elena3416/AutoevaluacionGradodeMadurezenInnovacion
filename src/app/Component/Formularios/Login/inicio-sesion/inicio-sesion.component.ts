import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageerrorsService } from '../../../../Services/messageerrors.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

   //informacion del html
   public InicioSesion:string = "Iniciar Sesión";
   public CorreoElectronico:string = "Correo Electrónico: *";
   public Password:string = "Contraseña: *";
   public ButtonInicioSesion:string = "Inicia Sesion";
   public linkolvidarpassword:string = "Cambiar contraseña";
   public linkregistrate:string = "Registrate aquí";
   public parrafo1:string = "Olvidaste tu contraseña, no te preocupes, puedes cambiarla en este link de abajo.";
   public parrafo2:string = "Aún no te has registrado, puedes registrate aquí en el link de abajo.";
   public parrafo3:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
   public parrafo4:string = "Para registrar como usuario es necesario darle click en el de abajo.";
   public LinkRegistrarUsuario:string = "Registrar Usuario";

    //propiedad formulario
   public formulario!: FormGroup;
   public log:boolean = false;
 
   constructor(private AWMsgErrSrv:MessageerrorsService, 
    private router:Router) { }
 
   ngOnInit(): void {
     this.CreateForm();
   }
 
   public CreateForm():void{
     this.formulario = new FormGroup({
 
       Email: new FormControl(null,[
           RxwebValidators.email(),
           RxwebValidators.required(),
           RxwebValidators.minLength({value:3}),
           RxwebValidators.maxLength({value:30}),
       ]),
 
       Password: new FormControl(null, [
         RxwebValidators.required(),
         RxwebValidators.password({validation:{maxLength: 15, minLength: 8, digit:true, specialCharacter:true}})
       ])
     });
   }
 
   public Validarform(control:string){
     if(!this.formulario.controls[control].touched) return {error:undefined};
     if(!this.formulario.controls[control].touched) return {message:undefined};
 
     return this.AWMsgErrSrv.ErrorMessage(this.formulario.controls[control].errors);
   }

   public changepassword():void{
    this.router.navigate(["cambiarpassword"]);
   }

   public AdminRegister():void{
     this.router.navigate(["registraradministrador"]);
   }

   hideModal():void {
   var modal: HTMLElement|null =  document.getElementById('close-modal');
   modal?.click();
  }

  public INICIO():void{
    this.router.navigate(["inicio"]);
  }
  
  public UserRegister():void{
    this.router.navigate(["registrarusuario"]);
  }
 }