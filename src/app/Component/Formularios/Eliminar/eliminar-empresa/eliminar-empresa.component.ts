import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';
import { EmpresaService } from "src/app/Services/empresa.service";
import { RegistrarEmpresaComponent } from '../../Registros/registrar-empresa/registrar-empresa.component';

@Component({
  selector: 'app-eliminar-empresa',
  templateUrl: './eliminar-empresa.component.html',
  styleUrls: ['./eliminar-empresa.component.css']
})
export class EliminarEmpresaComponent implements OnInit {
  public Titulo:string = "Eliminar Empresa";
  public Etiqueta:string = "RFC de la empresa: *";
  public btnBuscarEmpresa:string = "Eliminar Empresa";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
  public formulario! : FormGroup;
  public ListaEmpresa: any[] = [];
  public i:any;

  constructor(private AWMsgErrors:MessageerrorsService, private router:Router,
  private empresa:EmpresaService) { }

  ngOnInit(): void {
    this.CrearForm();
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

  public ObtenerEmpresa(){
    this.empresa.GetListEmpresa().subscribe(
      data => {
        console.log(data);
        this.empresa = data;
      }, error => {
        console.log(error);
      }
    );
  }

  // public EliminarEmpresa(id:number){
  //   this.empresa.DeleteEmpresa(id).subscribe(
  //     data => {
  //       this.ObtenerEmpresa();
  //     }, err => {
  //         console.log(err);
  //     }
  //   );
  // }
}
