import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageerrorsService {

  constructor() { }

  public ErrorMessage(errorRecibido: any) {

    let message: string = "";

    if (errorRecibido == null) {
      return {
        error: false
      }
    }

    switch (true) {
      case errorRecibido.hasOwnProperty("required"):
      message = 'Este campo no debe estar vacío';
      break;

      case errorRecibido.hasOwnProperty('pattern'):
      message = "En este campo sólo permite letras";
      break;

      case errorRecibido.hasOwnProperty("minLength"):
      message = "La longitud mínima en este campo no es suficiente";
      break;
  
      case errorRecibido.hasOwnProperty("maxLength"):
      message = "La longitud máxima en este campo es excedida";
      break;

      case errorRecibido.hasOwnProperty("digit"):
      message = "Este campo sólo permite números";
      break; 

      case errorRecibido.hasOwnProperty("email"):
      message = "Este campo debe contener un @ para el correo eléctronico";
      break;

      case errorRecibido.hasOwnProperty('password'):
      message = "Este campo tiene como máximo 15 y mínimo 8 carácteres, incluyendo números y carácteres especiales";
      break;

      case errorRecibido.hasOwnProperty('compare'):
      message = "Esta contraseña no coincide con la contraseña anterior";
      break;
    }

    return {
      message,
      error: true,
    };
  }
}
