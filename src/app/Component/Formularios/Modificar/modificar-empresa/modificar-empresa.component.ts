import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { CountryService } from 'src/app/Services/country.service';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';

@Component({
  selector: 'app-modificar-empresa',
  templateUrl: './modificar-empresa.component.html',
  styleUrls: ['./modificar-empresa.component.css']
})
export class ModificarEmpresaComponent implements OnInit {

   //informacion del html
   public ModificarEmpresa:string = "Modificar Empresa";
   public Identificacion:string = "RFC de la Empresa: *";
   public NombreEmpresa:string = "Nombre de la Empresa: *";
   public Cluster:string = "Asociaciones, Clústers, Cámaras: *";
   public GiroEmpresa:string = "Giro de la Empresa: *";
   public Pais:string = "País: *";
   public Estado:string = "Estados: *";
   public Municipio:string = "Municipios: *";
   public ButtonModEmpresa:string = "Modificar Empresa";
   public condiciones:string = "En este apartado, podrás registrar a tu empresa, en donde conocerás el grado de madurez.";
   public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";
 
   //propiedad formulario
   public formulario!:FormGroup;
   public NameCountries:Array<string> = [];
   public NameMunicipios:Array<string> = [];
 
   constructor(private AWMsgError:MessageerrorsService, private country:CountryService, 
     private municipios:CountryService) {
     this.country.GetCountries().subscribe((country:string)  => this.NameCountries.push(country));
     this.municipios.GetMunicipios().subscribe((municipio:string) => this.NameMunicipios.push(municipio));
    }
 
   ngOnInit(): void {
     this.CreateForm();
     
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
         RxwebValidators.required(),
         RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
         RxwebValidators.minLength({value:5}),
         RxwebValidators.maxLength({value:30})
       ]),
 
       giroempresa: new FormControl(null, [
         RxwebValidators.required(),
         RxwebValidators.pattern({expression:{onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
         RxwebValidators.minLength({value:5}),
         RxwebValidators.maxLength({value:30})
       ]),
 
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
}
