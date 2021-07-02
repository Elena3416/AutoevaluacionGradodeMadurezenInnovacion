import { Router } from '@angular/router';
import { EmpresaI } from './../../../../Interfaces/EmpresaInterface';
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
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {

  //informacion del html
  public RegEmpresa:string = "Registro de Empresa";
  public Identificacion:string = "RFC de la Empresa: *";
  public NombreEmpresa:string = "Nombre de la Empresa: *";
  public Cluster:string = "Asociaciones, Clústers, Cámaras: *";
  public GiroEmpresa:string = "Giro de la Empresa: *";
  public Pais:string = "País: *";
  public Estado:string = "Estados: *";
  public Municipio:string = "Municipios: *";
  public ButtonRegEmpresa:string = "Registrar Empresa";
  public condiciones:string = "En este apartado, podrás registrar a tu empresa, en donde conocerás el grado de madurez.";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";

  //propiedad formulario
  public formulario!:FormGroup; 
  pais:PaisI[] = [];
  estado:EstadosMexicoI[] = [];
  municipio:MunicipioI[] = [];
  cluster:ClusterI[] = [];
  giro:GiroI[] = [];
  empresa :any;

  constructor(private AWMsgError:MessageerrorsService, 
    private empresaservices:EmpresaService, private paisesservices:PaisService, 
    private estadosmexservices:EstadosService, private municipioservices: MunicipioService, 
    private clustersservices:ClusterService, private giroservices:GiroService, 
    private router:Router, private toastr: ToastrService) {
   }

  ngOnInit(): void {
    this.CreateForm();
    this.getPaises();
    this.getEstados();
    this.getMunicipios();
    this.getCluster();
    this.getGiro(); 
  }

  public CreateForm():void{
    this.formulario = new FormGroup({

      rfc: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.upperCase(),
        RxwebValidators.alphaNumeric(),
        RxwebValidators.maxLength({value:13})
      ]),

      cluster: new FormControl(null, [
        RxwebValidators.required()]),

      giroempresa: new FormControl(null, [
        RxwebValidators.required()]),

      pais: new FormControl(null, [
        RxwebValidators.required()]),

      estado: new FormControl(null, [
        RxwebValidators.required()]),
        
      municipio: new FormControl(null, [
        RxwebValidators.required()]),  
    });
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return {error:undefined};
    if(!this.formulario.controls[control].touched) return {message:undefined};
    return this.AWMsgError.ErrorMessage(this.formulario.controls[control].errors);
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

  RegistrarEmpresa(){
      const empresaria: any = {
        rfc: this.formulario.get("rfc")?.value,
        cluster: this.formulario.get("cluster")?.value,
        giroempresa: this.formulario.get("giroempresa")?.value,
        pais: this.formulario.get("pais")?.value,
        estado: this.formulario.get("estado")?.value,
        municipio: this.formulario.get("municipio")?.value
      }
      this.empresaservices.SaveEmpresa(empresaria).subscribe(data => {
        this.empresa = data;
        this.toastr.success("Registro Empresa", "Empresa Registrada Existosamente");    
        this.formulario.reset();
      }, error => {
        console.log(error)
      });
    } 
  }