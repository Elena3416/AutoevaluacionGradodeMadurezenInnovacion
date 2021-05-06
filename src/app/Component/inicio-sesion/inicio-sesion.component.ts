import { MessageerrorsService } from './../../Services/messageerrors.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import { RxwebValidators} from "@rxweb/reactive-form-validators";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

    //informacion del html
    public InicioSesion:string = "Iniciar Sesión";
    public CorreoElectronico:string = "Ingresa tu correo electrónico";
    public Password:string = "Ingresa tu contraseña";
    public ButtonInicioSesion:string = "Inicia Sesion";
     //propiedad formulario
    public formulario!: FormGroup;
  
    constructor(private AWMsgErrSrv:MessageerrorsService) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  public CreateForm(){
    this.formulario = new FormGroup({

      Email: new FormControl(null,[
          RxwebValidators.email(),
          RxwebValidators.required(),
          RxwebValidators.minLength({value:3}),
          RxwebValidators.maxLength({value:30}),
      ]),

      Password: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.password({validation:{maxLength: 15, minLength: 8, digit:true, specialCharacter:true}})
      ])
    });
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return {error:undefined};
    if(!this.formulario.controls[control].touched) return {message:undefined};

    return this.AWMsgErrSrv.ErrorMessage(this.formulario.controls[control].errors);
  }
}
