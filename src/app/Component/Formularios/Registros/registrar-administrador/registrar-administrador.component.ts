import { UsuarioService } from './../../../../Services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { PuestosI } from 'src/app/Interfaces/Puesto.interface';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';
import { PuestosService } from 'src/app/Services/puestos.service';

@Component({
  selector: 'app-registrar-administrador',
  templateUrl: './registrar-administrador.component.html',
  styleUrls: ['./registrar-administrador.component.css']
})
export class RegistrarAdministradorComponent implements OnInit {
  
  public RegistrarUsuarios:string = "Registro de Administrador y Contacto de Empresa";
  public FullName:string = "Nombres: *";
  public LastName:string = "Apellido Paterno: *";
  public MotherLastName:string = "Apellido Materno: *";
  public Email:string = "Correo Electrónico: *";
  public Contrasenia:string = "Contraseña: *";
  public RepetirContrasenia:string = "Confirma tu Contraseña: *";
  public Phone:string = "Teléfono de contacto: *";
  public BirthDate:string = "Fecha Nacimiento: *";
  public PositionCompany:string = "Puesto de la empresa a la que perteneces: *";
  public BtnRegistroadmon:string ="Registrate";
  public condiciones:string = "Este registro es para la persona que será el punto de contacto administrativo de la empresa, si tu empresa ya esta registrada y deseas tener tu acceso pídele al administrador que te registre como colaborador.";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";

  public formulario! : FormGroup;
  puesto: PuestosI[] = [];
  users: any;
  
  constructor(private AWMsg:MessageerrorsService, 
    private router:Router, private puestosservices:PuestosService, 
    private usuariosservices:UsuarioService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.CrearFormulario();
    this.GetPuestos();
  }

  public CrearFormulario():void{
      this.formulario = new FormGroup ({

        nombrecompleto: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+|[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:50})]),

        apellidopaterno : new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+|[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]),

        apellidomaterno: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+|[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]),
          
        fechanacimiento: new FormControl(null, [
           RxwebValidators.required()]),
           
         telefono: new FormControl(null, [
           RxwebValidators.required(),
           RxwebValidators.digit()]),
           
        correoelectronico: new FormControl(null,[
          RxwebValidators.required(),
          RxwebValidators.email(),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]), 
          
        password: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.password({validation:{maxLength: 15, minLength: 8, digit:true, specialCharacter:true}})
       ]),
         
        repetirpassword: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.password({validation:{maxLength: 15, minLength: 8, digit:true, specialCharacter:true}}),
          RxwebValidators.compare({fieldName:"password"})]),

        puestopertenece: new FormControl(null,[
          RxwebValidators.required()]),
      })
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return { error: undefined};
    
    if(!this.formulario.controls[control].touched) return { message: undefined};

    return this.AWMsg.ErrorMessage(this.formulario.controls[control].errors);
  }


  public GetPuestos(){
    this.puestosservices.GetListPuestos().subscribe(
      res => {
        this.puesto = res;
      }, err => {
        console.log(err);
    });
  }

  RegistrarUsuario(){
    const administrador: any = {
      nombrecompleto: this.formulario.get("nombrecompleto")?.value,
      apellidopaterno: this.formulario.get("apellidopaterno")?.value,
      apellidomaterno: this.formulario.get("apellidomaterno")?.value,
      fechanacimiento: this.formulario.get("fechanacimiento")?.value,
      telefono: this.formulario.get("telefono")?.value,
      correoelectronico: this.formulario.get("correoelectronico")?.value,
      password: this.formulario.get("password")?.value,
      puestopertenece: this.formulario.get("puestopertenece")?.value
    }
    this.usuariosservices.SaveUsuario(administrador).subscribe(data => {
      this.users = data;  
      this.toastr.success("Registro","Usuario Registrado Exitosamente");   
      this.router.navigate(["inicio"]);
    }, error => {
      console.log(error)
    });
  } 
  }