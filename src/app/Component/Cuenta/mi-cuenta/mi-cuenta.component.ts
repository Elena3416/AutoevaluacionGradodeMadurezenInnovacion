import { EmpresaService } from './../../../Services/empresa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { PuestosService } from 'src/app/Services/puestos.service';
import { PuestosI } from 'src/app/Interfaces/Puesto.interface';
import { ClusterService } from 'src/app/Services/cluster.service';
import { ClusterI } from 'src/app/Interfaces/Cluster.interface';

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

  users: any;
  empresas: any;
  cluster:ClusterI[] = [];
  puesto: PuestosI[] = [];

  constructor(private router:Router, private usuarioservicio:UsuarioService,
  private puestosservices:PuestosService, private empresaservice:EmpresaService,
  private clusterservice:ClusterService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetPuestos();
    this.getCluster();
    this.ObtenerEmpresa();
  }

  routerTo(r: string)
  {
    this.router.navigateByUrl(r);
  }

  entrar(){
    this.hideModal();
  }

  hideModal():void {
    var modal: HTMLElement|null =  document.getElementById('close-modal');
    modal?.click();
   }

   public getCluster(){
    this.clusterservice.GetListCluster().subscribe(
      res => {
        this.cluster = res;
      }, err => {
        console.error(err);
      }
    );
  }

public ObtenerEmpresa(){
  this.empresaservice.GetListEmpresa().subscribe(
    (value) => {
      this.empresas = value;
    }, error => {
      console.log(error);
    }
  );
}

   public GetPuestos(){
    this.puestosservices.GetListPuestos().subscribe(
      res => {
        this.puesto = res;
      }, err => {
        console.log(err);
    });
  }

  public ObtenerUsuario(){
    this.usuarioservicio.GetOneUser(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe(data =>{
      this.users = data;
    },err => {
      console.log(err);
    }
    );
  }
}