import { HttpClient } from '@angular/common/http';
import { usuarioI } from './../../../Interfaces/UsuarioInterface';
import { DataService } from './../../../Services/data.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageerrorsService } from './../../../Services/messageerrors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})

export class RegistrarUsuarioComponent implements OnInit {
  public RegistrarUsuarios:string = "Registro de usuario";
  public FullName:string = "Ingresa tu Nombre Completo:";
  public LastName:string = "Ingresa tu Apellido Paterno:";
  public MotherLastName:string = "Ingresa tu Apellido Materno:";
  public Email:string = "Ingresa tu Correo Electrónico:";
  public Contrasenia:string = "Ingresa tu Contraseña:";
  public RepetirContrasenia:string = "Ingresa de nuevo tu Contraseña:";
  public Phone:string = "Ingresa tu Teléfono celular:";
  public BirthDate:string = "Ingresa tu Fecha Nacimiento:";
  public PositionCompany:string = "Selecciona el puesto de la empresa a la que perteneces:";
  public ButtonRegUsuario:string = "Registrar Usuario";
  public Registroadmon:string = "Registro de administrador y contacto de empresa";
  public condiciones:string = "Este registro es para la persona que será el punto de contacto administrativo de la empresa, si tu empresa ya esta registrada y deseas tener tu acceso pídele al administrador que te registre como colaborador.";

  public formulario! : FormGroup;
  public Usuario: usuarioI[] = [];
  
  constructor(private AWMsg:MessageerrorsService, 
    private UserDB: DataService) { }

  ngOnInit(): void {
    this.CrearFormulario();
  }

  public CrearFormulario(){
      this.formulario = new FormGroup ({

        nombrecompleto: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]),

        apellidopaterno : new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]),

        apellidomaterno: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]),
          
        fechanacimiento: new FormControl(null, [
           RxwebValidators.required()]),
           
         telefono: new FormControl(null, [
           RxwebValidators.required(),
           RxwebValidators.digit(),
           RxwebValidators.maxLength({value:10})]),
           
        correoelectronico: new FormControl(null,[
          RxwebValidators.required(),
          RxwebValidators.email(),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]), 
          
        password: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.password({validation:{maxLength:10, minLength:8, digit:true, specialCharacter:true}})]),  
         
        repetirpassword: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.password({validation: {maxLength: 10, minLength:8, digit:true, specialCharacter:true}}),
          RxwebValidators.compare({fieldName:"password"})]),

        puestopertenece: new FormControl(null,[
          RxwebValidators.required()]),

        condiciones: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.requiredTrue()])
      })
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return { error: undefined};
    
    if(!this.formulario.controls[control].touched) return { message: undefined};

    return this.AWMsg.ErrorMessage(this.formulario.controls[control].errors);
  }

  public GuardarUsuario(){
    
    if(!this.formulario.valid) {
      alert ('Formulario Invalido');
      return;
    };

    const Usuario:usuarioI = this.formulario.value;
    // this.UserDB.GuardarUsuario(Usuario);
  }
}