import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PuestosService } from 'src/app/Services/puestos.service';
import { PuestosI } from 'src/app/Interfaces/Puesto.interface';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  public Titulo: string = "Búsqueda Usuario";
  public Mensaje: string = "En este apartado, podrás buscar la información de todos los usuarios ya registrados en la plataforma.";
  public buscarusuario = "Buscar Usuarios";

  puestos: PuestosI[] = [];
  usuario:any;

  constructor( private router:Router, private toastr:ToastrService,
    private puesto:PuestosService, private usuarioservices:UsuarioService) { }

  ngOnInit(): void {
    this.getPuestos();
  }

  public userupdate():void{
    this.router.navigate(["modificarusuario"]);
  }

  getPuestos(){
    this.puesto.GetListPuestos().subscribe(
      res => {
        this.puestos = res;
      }, err =>{
        console.log(err);
      }
    );
  }

  public ObtenerUsuario(){
    this.usuarioservices.GetListUsuario().subscribe(
      (value) => {
        this.usuario = value;
      }, error => {
        console.log(error);
      }
    );
  }

  public EliminarUsuario(id:number){
    this.usuarioservices.DeleteUsuario(id).subscribe( 
      data => {
        this.toastr.success("La empresa fue eliminada", "Empresa Eliminada");
        this.ObtenerUsuario();
      },err =>{
        console.log(err);
      } 
    )}
  }