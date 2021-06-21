import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageerrorsService } from '../../../../Services/messageerrors.service';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-empresa',
  templateUrl: './buscar-empresa.component.html',
  styleUrls: ['./buscar-empresa.component.css']
})
export class BuscarEmpresaComponent implements OnInit {
  public Titulo:string = "Búsqueda Empresa";
  public Mensaje:string = "En este apartado, puedes modificar algún dato de tu empresa, buscándola por el RFC de tu empresa.";
  public Etiqueta:string = "RFC de la empresa: *"
  public btnBuscarEmpresa:string = "Buscar Empresa";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
  public formulario! : FormGroup;
  pais:PaisI[] = [];
  estado:EstadosMexicoI[] = [];
  municipio:MunicipioI[] = [];
  cluster:ClusterI[] = [];
  giro:GiroI[] = [];
  ListaEmpresa: any[] = [];

  constructor(private AWMsgErrors:MessageerrorsService, 
    private empresaservices:EmpresaService, private paisesservices:PaisService, 
    private estadosmexservices:EstadosService, private municipioservices: MunicipioService, 
    private clustersservices:ClusterService, private giroservices:GiroService, private router:Router) { }

  ngOnInit(): void {
    this.CrearForm();
    this.getPaises();
    this.getEstados();
    this.getMunicipios();
    this.getCluster();
    this.getGiro();
  }

  public CrearForm():void {
    this.formulario = new FormGroup({

      NumeroEmpresa: new FormControl(null,
        [
          RxwebValidators.required(),
          RxwebValidators.digit()])
    });
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return { error: undefined};
    if(!this.formulario.controls[control].touched) return { message: undefined};

    return this.AWMsgErrors.ErrorMessage(this.formulario.controls[control].errors);
  }

  public updatecompany():void{
    this.router.navigate(["modificarempresa"]);
  }

  public deletecompany():void{
    this.router.navigate(["eliminarempresa"]);
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
        this.estado = res;
      }, err => {
        console.error(err);
      }
    );
  }

  public getMunicipios(){
    this.municipioservices.GetListMunicipio().subscribe(
      res => {
        this.municipio = res;
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
      data => {
        console.log(data);
        this.empresaservices = data;
      }, error => {
        console.log(error);
      }
    );
  }
}