import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageerrorsService } from "../../../Services/messageerrors.service";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  public CorreoElectronico:string = "Correo Electrónico:";
  public Password:string = "Contraseña:";
  public linkolvidarpassword:string = "Olvidaste tu contraseña";
  public ButtonInicioSesion:string = "Iniciar Sesión";
  public formulario!: FormGroup;
  log: boolean = false;

  constructor(private AWMsgErrSrv:MessageerrorsService, 
    private router:Router) { }

  ngOnInit() {
    this.CreateForm();
  }

  routerTo(r:string){
    this.router.navigateByUrl(r);
  }

  public CreateForm(){
    this.log = true;
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
    this.log = false;
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return {error:undefined};
    if(!this.formulario.controls[control].touched) return {message:undefined};

    return this.AWMsgErrSrv.ErrorMessage(this.formulario.controls[control].errors);
  }
}
