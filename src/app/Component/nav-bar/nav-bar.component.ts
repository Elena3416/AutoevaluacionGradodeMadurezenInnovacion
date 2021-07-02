import { UsuarioService } from './../../Services/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PuestosI } from 'src/app/Interfaces/Puesto.interface';
import { PuestosService } from 'src/app/Services/puestos.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public titulo:string = "Nuevo León 4.0";
  public logo:string = "assets/IMG/logo_chico.png";
  public Empresa:string = "Mi empresa";
  public Encuestas:string = "Mis Encuestas";
  public Colaboradores:string = "Mis colaboradores";
  public Inicio:string = "Inicio";
  public BuscarUsuario:string ="Buscar Usuario";
  public BuscarEmpresa:string ="Buscar Empresa";
  public BuscarEncuesta:string ="Buscar Encuesta";
  public RegistrarEncuesta:string = "Registrar Encuesta";
  public RegistrarUsuario:string = "Registrar Usuario";
  public RegistrarEmpresa:string = "Registrar Empresa";
  public MiCuenta:string = "Mi cuenta";
  public Cerrarsesion:string = "Cerrar Sesión"; 

  constructor(private router:Router) { }
  
  users : any;
  puesto: PuestosI[] = [];
  
  ngOnInit() {
    // this.getStrings();
    // this.isAdmin();
  }

  // getStrings(){
  //   this.nombre = this.session.getContactoName();
  //   this.tipo_user = this.session.getTipoUsuario();
  // }

  closeSession(){
    // this.session.closeSession();
    this.router.navigateByUrl('landing');
  }

  // isAdmin(){
  //   if(this.session.getTipoUsuario() == "colaborador"){
  //     this.admin = false;
  //   }
  // }
}