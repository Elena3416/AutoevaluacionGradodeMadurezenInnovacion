import { Router } from '@angular/router';
import { SessionService } from './../../Services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public titulo:string = "Nuevo León 4.0";
  public logo:string = "assets/IMG/logo2.jpg";
  public Empresa:string = "Mi empresa";
  public Encuestas:string = "Encuestas";
  public Colaboradores:string = "Mis colaboradores";

  constructor(
    private session:SessionService,
    private router:Router
  ) { }
  
  nombre: string = " ";
  tipo_user: string = " ";
  admin: boolean = true;
  
  ngOnInit() {
    // this.getStrings();
    // this.isAdmin();
  }

  // getStrings(){
  //   this.nombre = this.session.getContactoName();
  //   this.tipo_user = this.session.getTipoUsuario();
  // }

  closeSession(){
    this.session.closeSession();
    this.router.navigateByUrl('landing');
  }

  // isAdmin(){
  //   if(this.session.getTipoUsuario() == "colaborador"){
  //     this.admin = false;
  //   }
  // }
}