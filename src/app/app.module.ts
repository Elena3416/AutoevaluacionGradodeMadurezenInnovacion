import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from "./../app.routes";

import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from "@angular/material/icon";
import { PaginaInicialComponent } from './Component/pagina-inicial/pagina-inicial.component';
import { FooterComponent } from './Component/footer/footer.component';

import { InicioSesionComponent } from './Component/inicio-sesion/inicio-sesion.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import { RegistrarUsuarioComponent } from './Component/registrar-usuario/registrar-usuario.component';
import { ContactoComponent } from './Component/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaInicialComponent,
    FooterComponent,
    InicioSesionComponent,
    RegistrarUsuarioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    RxReactiveFormsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
