import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  public Cuenta:string = "Mi cuenta";
  public Datos:string = "Datos corporativos";
  public Empresa:string = "Empresa:";
  public Registradocomo:string = "Registrado como (Rol en el sistema):";
  public Puesto:string = "Puesto:";
  public Personales:string = "Datos personales:";
  public Nombre:string = "Nombre:";
  public Correo:string = "Correo:";
  public Telefono:string = "Teléfono:";
  public Sesion:string = "Datos de sesión";
  public Usuario:string = "Nombre de usuario:";
  public Contrasena:string = "Contraseña:"; 
  public Cargando:string = "Cargando datos . . .";
  public Contrasena2:string = "Contraseña:";
  public Cerrar:string = "Cerrar";
  public Entrar:string = "Entrar";
  location: any;
  router: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  return(){
    this.location.back();
  }

  routerTo(r : string)
  {
    this.router.navigateByUrl(r);
  }

  entrar(){
    this.hideModal();
    this.routerTo('Cuenta/modificarcuenta');
  }

  hideModal():void {
    var modal: HTMLElement|null =  document.getElementById('close-modal');
    modal?.click();
   }
}
