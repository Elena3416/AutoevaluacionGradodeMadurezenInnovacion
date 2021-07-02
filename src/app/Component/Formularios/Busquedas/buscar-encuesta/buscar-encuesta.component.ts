import { ToastrService } from 'ngx-toastr';
import { UsuarioI } from 'src/app/Interfaces/Usuario.interface';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { EncuestaService } from './../../../../Services/encuesta.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-encuesta',
  templateUrl: './buscar-encuesta.component.html',
  styleUrls: ['./buscar-encuesta.component.css']
})
export class BuscarEncuestaComponent implements OnInit {

  public Titulo:string = "Búsqueda Encuesta";
  public Mensaje:string = "En este apartado, podrás buscar todas las encuestas ya realizadas en la plataforma.";
  public btnBuscarEncuesta:string = "Buscar Encuestas";
  Usuariointerface:UsuarioI[] = [];
  encuesta:any; 

  constructor(private router:Router, private encuestasservices:EncuestaService,
    private usuarioservices:UsuarioService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.GetUsuario();
  }

  public updatesurvey():void {
    this.router.navigate(["modificarencuesta"]);
  }

  public GetUsuario(){
    this.usuarioservices.GetListUsuario().subscribe(
      res => {
        this.Usuariointerface = res;
      }, error => {
        console.log(error);
      }
    );
  }

  public ObtenerEncuesta(){
      this.encuestasservices.GetListEncuesta().subscribe(
        (value) => {
          this.encuesta = value;
        }, error => {
          console.log(error);
        }
      );
  }

    public EliminarEmpresa(id:number){
    this.encuestasservices.DeleteEncuesta(id).subscribe( 
      data => {
        this.toastr.success("La empresa fue eliminada", "Empresa Eliminada");
        this.ObtenerEncuesta();
      },err =>{
        console.log(err);
      } 
    );
}
}