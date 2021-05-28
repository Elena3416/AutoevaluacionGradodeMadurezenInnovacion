import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { usuarioI } from 'src/app/Interfaces/UsuarioInterface';
import { DataService } from 'src/app/Services/data.service';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  public ModificarUsuarios:string = "Modificar Usuario";
  public FullName:string = "Ingresa tu Nombre Completo: *";
  public LastName:string = "Ingresa tu Apellido Paterno: *";
  public MotherLastName:string = "Ingresa tu Apellido Materno: *";
  public Email:string = "Ingresa tu Correo Electrónico: *";
  public Contrasenia:string = "Ingresa tu Contraseña: *";
  public RepetirContrasenia:string = "Ingresa de nuevo tu Contraseña: *";
  public Phone:string = "Ingresa tu Teléfono celular: *";
  public BirthDate:string = "Ingresa tu Fecha Nacimiento: *";
  public PositionCompany:string = "Selecciona el puesto de la empresa a la que perteneces: *";
  public ButtonUpdateUsuario:string = "Modificar Usuario";
  public Registroadmon:string = "Registro de administrador y contacto de empresa";
  public condiciones:string = "Éste apartado podrás modificar alguna información de tus datos.";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";

  public formulario! : FormGroup;
  public Usuario: usuarioI[] = [];
  
  constructor(private AWMsg:MessageerrorsService, 
    private UserDB: DataService) { }

  ngOnInit(): void {
    this.CrearFormulario();
  }

  public CrearFormulario():void{
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
          RxwebValidators.required()])
      })
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return { error: undefined};
    
    if(!this.formulario.controls[control].touched) return { message: undefined};

    return this.AWMsg.ErrorMessage(this.formulario.controls[control].errors);
  }
}
