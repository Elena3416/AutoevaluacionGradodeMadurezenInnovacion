import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Rutas
import { APP_ROUTES } from "./../app.routes";

//Angular Material
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner" 

//Components


//Angular Forms
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

//Validaciones
import { RxReactiveFormsModule} from '@rxweb/reactive-form-validators';

//HTTPClient
import { HttpClientModule } from "@angular/common/http";
//Directiva
import { UppercaseletterDirective } from './Directivas/uppercaseletter.directive';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { PaginaInicialComponent } from './Component/pagina-inicial/pagina-inicial.component';
import { RegistrarUsuarioComponent } from './Component/Formularios/registrar-usuario/registrar-usuario.component';
import { FooterComponent } from './Component/footer/footer.component';
import { RegistrarEmpresaComponent } from './Component/Formularios/registrar-empresa/registrar-empresa.component';
import { EncuestasComponent } from './Component/encuestas/encuestas.component';
import { CambioPasswordComponent } from './Component/Formularios/cambio-password/cambio-password.component';
import { InicioSesionComponent } from './Component/Formularios/inicio-sesion/inicio-sesion.component';
import { ModificarUsuarioComponent } from './Component/Formularios/modificar-usuario/modificar-usuario.component';
import { ModificarEmpresaComponent } from './Component/Formularios/modificar-empresa/modificar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    NavBarComponent,
    FooterComponent,
    RegistrarUsuarioComponent,
    RegistrarEmpresaComponent,
    EncuestasComponent,
    UppercaseletterDirective,
    CambioPasswordComponent,
    InicioSesionComponent,
    ModificarUsuarioComponent,
    ModificarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    RxReactiveFormsModule,
    APP_ROUTES,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
