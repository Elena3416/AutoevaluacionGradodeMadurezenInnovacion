import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  public RegUsuarios:string = "Registro de usuario";
  public NombreCompleto:string = "Ingresa tu Nombre Completo:";
  public ApellidoPaterno:string = "Ingresa tu Apellido Paterno:";
  public ApellidoMaterno:string = "Ingresa tu Apellido Materno:";
  public CorreoElectronico:string = "Ingresa tu Correo Electrónico:";
  public Contrasenia:string = "Ingresa tu Contraseña:";
  public RepetirContrasenia:string = "Ingresa de nuevo tu Contraseña";
  public Telefono:string = "Ingresa tu Teléfono celular:";
  public FechaNacimiento:string = "Ingresa tu Fecha Nacimiento:";
  public PuestoPerteneceEmpresa:string = "Selecciona el puesto de la empresa a la que perteneces:";
  public ButtonRegUsuario:string = "Registrar Usuario";
  public Condiciones:string = "Aceptar Términos y condiciones";

  constructor() { }

  ngOnInit(): void {
  }
}