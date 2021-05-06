import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Rutas
import { APP_ROUTES } from "./../app.routes";

//Angular Material
import { MatIconModule } from "@angular/material/icon";

//Components
import { InicioSesionComponent } from './Component/inicio-sesion/inicio-sesion.component';
import { RegistrarUsuarioComponent } from './Component/registrar-usuario/registrar-usuario.component';
import { ContactoComponent } from './Component/contacto/contacto.component';
import { PaginaInicialComponent } from './Component/pagina-inicial/pagina-inicial.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';

//Angular Forms
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

//Validaciones
import { RxReactiveFormsModule} from '@rxweb/reactive-form-validators';

import { HttpClientModule } from "@angular/common/http";
import { RegistrarEmpresaComponent } from './Component/registrar-empresa/registrar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaInicialComponent,
    FooterComponent,
    InicioSesionComponent,
    RegistrarUsuarioComponent,
    ContactoComponent,
    RegistrarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    RxReactiveFormsModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
