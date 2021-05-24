import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  public Titulo:string = "Busqueda Usuario";
  public Mensaje:string = "Aquí podrás buscar tu información como usuario y tendrás la oportunidad de modificar tus datos."
  constructor() { }

  ngOnInit(): void {
  }

}
