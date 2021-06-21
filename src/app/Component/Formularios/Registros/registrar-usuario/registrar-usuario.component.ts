import { PuestosI } from './../../../../Interfaces/Puesto.interface';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  public RegistrarUsuario:string = "Registrar Usuario";
  public Informacion:string = "En este apartado puedes registrar a tus colaboradores como usuario.";
  public Username:string = "Nombre de Usuario: *"; 
  public Password:string = "Contraseña: *"; 
  public ButtonRegUsuario:string = "Registrar Usuario";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";

  public formulario!: FormGroup;
  log: boolean = false;
  puesto: PuestosI[] = [];

  constructor(private AWMsgErrSrv:MessageerrorsService, private Usuario:UsuarioService,
    private router:Router) { }

  ngOnInit() {
    this.CreateForm();
  }

  public CreateForm():void{
    this.formulario = new FormGroup({

      nombreusuario: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.minLength({value:3}),
          RxwebValidators.maxLength({value:20})]),

      password: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.password({validation: {maxLength: 15, minLength:8, digit:true, specialCharacter:true}}),
        RxwebValidators.compare({fieldName:"password"})
      ])    
    });
    this.log = false;
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return {error:undefined};
    if(!this.formulario.controls[control].touched) return {message:undefined};

    return this.AWMsgErrSrv.ErrorMessage(this.formulario.controls[control].errors);
  }

    // Inicio(){
    //   this.router.navigate(["inicio"]);
    // }

    registrarusuario(){
      const usuario:any = {
        email:this.formulario.get("nombreusuario")?.value,
        password:this.formulario.get("password")?.value
      }
      console.log(usuario);
    }
}
