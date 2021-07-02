import { Component, OnInit } from '@angular/core';
import { PaisI } from "src/app/Interfaces/Pais.interface";
import { EstadosMexicoI } from "src/app/Interfaces/EstadosMexico.interface";
import { MunicipioI } from "src/app/Interfaces/Municipios.interface";
import { GiroI } from "src/app/Interfaces/Giro.interface";
import { ClusterI } from "src/app/Interfaces/Cluster.interface";
import { EmpresaService } from "src/app/Services/empresa.service";
import { PaisService } from "src/app/Services/pais.service";
import { EstadosService } from "src/app/Services/estados.service";
import { MunicipioService } from "src/app/Services/municipio.service";
import { ClusterService } from "src/app/Services/cluster.service";
import { GiroService } from "src/app/Services/giro.service";
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buscar-empresa',
  templateUrl: './buscar-empresa.component.html',
  styleUrls: ['./buscar-empresa.component.css']
})
export class BuscarEmpresaComponent implements OnInit {
  
  public Titulo:string = "Búsqueda Empresa";
  public Mensaje:string = "En este apartado, podrás buscar todas las encuestas ya realizadas en la plataforma.";
  public btnBuscarEmpresa:string = "Buscar Empresas";
  
  pais:PaisI[] = [];
  estado:EstadosMexicoI[] = [];
  municipio:MunicipioI[] = [];
  cluster:ClusterI[] = [];
  giro:GiroI[] = [];
  empresas: any;

  constructor(private empresaservices:EmpresaService, private paisesservices:PaisService, 
    private estadosmexservices:EstadosService, private municipioservices: MunicipioService, 
    private clustersservices:ClusterService, private giroservices:GiroService, private router:Router,
    private toastr:ToastrService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPaises();
    this.getEstados();
    this.getMunicipios();
    this.getCluster();
    this.getGiro();
  }

  public updatecompany():void{
    this.router.navigate(["modificarempresa"]);
  }

  public getPaises(){
    this.paisesservices.GetListPais().subscribe(
      res => {
        this.pais = res;
      }, err => {
        console.error(err);
      }
    );
  }

  public getEstados(){
    //manda llamar al metodo del service to print the answer o el error si existe un error
    this.estadosmexservices.GetListEstado().subscribe(
      res => {
        this.cluster = res;
      }, err => {
        console.error(err);
      }
    );
  }

  public getMunicipios(){
    this.municipioservices.GetListMunicipio().subscribe(
      res => {
        this.cluster = res;
      }, err => {
        console.error(err);
      }
    );
  }

  public getCluster(){
      this.clustersservices.GetListCluster().subscribe(
        res => {
          this.cluster = res;
        }, err => {
          console.error(err);
        }
      );
    }

  public getGiro(){
    this.giroservices.GetListGiro().subscribe(
      res => {
        this.giro = res;
      }, err => {
        console.error(err);
      } 
    );
  }

  public ObtenerEmpresa(){
    this.empresaservices.GetListEmpresa().subscribe(
      (value) => {
        this.empresas = value;
      }, error => {
        console.log(error);
      }
    );
  }
  public EliminarEmpresa(){
    this.empresaservices.DeleteEmpresa(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe( 
      data => {
        this.toastr.success("La empresa fue eliminada", "Empresa Eliminada");
        this.ObtenerEmpresa();
      },err =>{
        console.log(err);
      } 
    );
  }
}