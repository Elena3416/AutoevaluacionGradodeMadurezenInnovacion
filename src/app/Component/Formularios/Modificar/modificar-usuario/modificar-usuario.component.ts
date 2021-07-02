import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MessageerrorsService } from 'src/app/Services/messageerrors.service';
import { UsuarioService } from "src/app/Services/usuario.service";

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  public ModificarUsuarios:string = "Modificar Usuario";
  public FullName:string = "Nombre Completo: *";
  public LastName:string = "Apellido Paterno: *";
  public MotherLastName:string = "Apellido Materno: *";
  public Email:string = "Correo Electrónico: *";
  public Contrasenia:string = "Contraseña: *";
  public RepetirContrasenia:string = "Confirma de nuevo tu Contraseña: *";
  public Phone:string = "Teléfono de contacto: *";
  public BirthDate:string = "Fecha Nacimiento: *";
  public PositionCompany:string = "Puesto de la empresa a la que perteneces: *";
  public ButtonUpdateUsuario:string = "Modificar Usuario";
  public condiciones:string = "Este apartado podrás modificar alguna información de tus datos.";
  public parrafo1:string = "Nota: Rellene todos los datos marcados como obligatorios *.";

  public formulario! : FormGroup;
  id: number | undefined
  usuario: any;
  
  constructor(private AWMsg:MessageerrorsService, private UsuarioService:UsuarioService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.CrearFormulario();
  }

  public CrearFormulario():void{
      this.formulario = new FormGroup ({

        nombrecompleto: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+|[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:50})]),

        apellidopaterno : new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+|[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]),

        apellidomaterno: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.pattern({expression: {onlyAlpha: /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+|[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/}}),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]),
          
        fechanacimiento: new FormControl(null, [
           RxwebValidators.required(),
           RxwebValidators.maxDate({value: new Date(2018,6,30)})]),
           
         telefono: new FormControl(null, [
           RxwebValidators.required(),
           RxwebValidators.digit(),
           RxwebValidators.maxLength({value:10})]),
           
        correoelectronico: new FormControl(null,[
          RxwebValidators.required(),
          RxwebValidators.email(),
          RxwebValidators.minLength({value:5}),
          RxwebValidators.maxLength({value:30})]), 
          
        password: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.password({validation:{maxLength: 15, minLength: 8, digit:true, specialCharacter:true}})
       ]),
         
        repetirpassword: new FormControl(null, [
          RxwebValidators.required(),
          RxwebValidators.password({validation:{maxLength: 15, minLength: 8, digit:true, specialCharacter:true}}),
          RxwebValidators.compare({fieldName:"password"})]),

        puestopertenece: new FormControl(null,[
          RxwebValidators.required()]),
      })
  }

  public Validarform(control:string){
    if(!this.formulario.controls[control].touched) return { error: undefined};
    
    if(!this.formulario.controls[control].touched) return { message: undefined};

    return this.AWMsg.ErrorMessage(this.formulario.controls[control].errors);
  }

   public ObtenerUsuario(){
    this.UsuarioService.GetListUsuario().subscribe(
      (value) => {
        console.log(value);
        this.usuario = value;
      }, error => {
        console.log(error);
      }
    );
  }

  GuardarUsuario(){
    const usuario: any = {
      nombrecompleto: this.formulario.get("nombrecompleto")?.value,
      apellidopaterno: this.formulario.get("apellidopaterno")?.value,
      apellidomaterno: this.formulario.get("apellidomaterno")?.value,
      fechanacimiento: this.formulario.get("fechanacimiento")?.value,
      telefono: this.formulario.get("telefono")?.value,
      password: this.formulario.get("password")?.value,
      repetirpassword: this.formulario.get("repetirpassword")?.value,
      puestopertenece: this.formulario.get("puestopertenece")?.value,
    }

    if(this.id == undefined){
      //Agregar tarjeta
      this.UsuarioService.SaveUsuario(usuario).subscribe(data => {
      this.toastr.success("La empresa fue registrada con exito", "Empresa Guardada");  
      this.ObtenerUsuario();  
      this.formulario.reset();
    }, error => {
      console.log(error)
    });
    } else{
      //Editar empresa
      this.UsuarioService.UpdateUsuario(this.id, usuario).subscribe(
        data => {
          this.formulario.reset();
          this.id = undefined;
          this.toastr.info("La empresa fue modificada con exito", "Empresa Modificada");
          this.ObtenerUsuario();
        }, err => {
          console.log(err);         
        })
    }
  } 

  EditarEmpresa(usuario:any){
    this.id = usuario.id;

    //Para llenar la info al formulario
    this.formulario.patchValue({
      nombrecompleto: usuario.nombrecompleto,
      apellidopaterno: usuario.apellidopaterno,
      apellidomaterno: usuario.apellidomaterno,
      fechanacimiento: usuario.fechanacimiento,
      telefono: usuario.telefono,
      password: usuario.password,
      repetirpassword: usuario.repetirpassword,
      puestopertenece: usuario.puestopertenece,
    })
  }
}