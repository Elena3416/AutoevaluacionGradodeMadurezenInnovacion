import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Rutas
import { APP_ROUTES } from "./../app.routes";

//Angular Material
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select"; 

//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { InicioSesionComponent } from './Component/Formularios/Login/inicio-sesion/inicio-sesion.component';
import { PaginaInicialComponent } from './Component/pagina-inicial/pagina-inicial.component';
import { RegistrarEmpresaComponent } from './Component/Formularios/Registros/registrar-empresa/registrar-empresa.component';
import { EncuestasComponent } from './Component/Formularios/Registros/registrar-encuestas/encuestas.component';
import { CambioPasswordComponent } from './Component/Formularios/Passwords/cambio-password/cambio-password.component';
import { NewPasswordComponent } from './Component/Formularios/Passwords/new-password/new-password.component';
import { BuscarUsuarioComponent } from './Component/Formularios/Busquedas/buscar-usuario/buscar-usuario.component';
import { BuscarEncuestaComponent } from './Component/Formularios/Busquedas/buscar-encuesta/buscar-encuesta.component';
import { ModificarEncuestaComponent } from './Component/Formularios/Modificar/modificar-encuesta/modificar-encuesta.component';
import { ModificarEmpresaComponent } from './Component/Formularios/Modificar/modificar-empresa/modificar-empresa.component';
import { ModificarUsuarioComponent } from './Component/Formularios/Modificar/modificar-usuario/modificar-usuario.component';
import { FooterComponent } from './Component/footer/footer.component';
import { BuscarEmpresaComponent } from './Component/Formularios/Busquedas/buscar-empresa/buscar-empresa.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { MiCuentaComponent } from './Component/Cuenta/mi-cuenta/mi-cuenta.component';
import { EliminarUsuarioComponent } from './Component/Formularios/Eliminar/eliminar-usuario/eliminar-usuario.component';
import { EliminarEncuestaComponent } from './Component/Formularios/Eliminar/eliminar-encuesta/eliminar-encuesta.component';
import { EliminarEmpresaComponent } from './Component/Formularios/Eliminar/eliminar-empresa/eliminar-empresa.component';
import { RegistrarAdministradorComponent } from './Component/Formularios/Registros/registrar-administrador/registrar-administrador.component';
import { RegistrarUsuarioComponent } from './Component/Formularios/Registros/registrar-usuario/registrar-usuario.component';

//Angular Forms
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

//Validaciones
import { RxReactiveFormsModule} from '@rxweb/reactive-form-validators';

//HTTPClient
import { HttpClientModule } from "@angular/common/http";

//Directiva
import { UppercaseletterDirective } from './Directivas/uppercaseletter.directive';
import { EditarCuentaComponent } from './Component/Cuenta/editar-cuenta/editar-cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaInicialComponent,
    RegistrarEmpresaComponent,
    EncuestasComponent,
    UppercaseletterDirective,
    CambioPasswordComponent,
    InicioSesionComponent,
    NewPasswordComponent,
    BuscarEncuestaComponent,
    BuscarUsuarioComponent,
    BuscarEncuestaComponent,
    ModificarEncuestaComponent,
    ModificarUsuarioComponent,
    ModificarEmpresaComponent,
    FooterComponent,
    BuscarEmpresaComponent,
    InicioComponent,
    MiCuentaComponent,
    EliminarUsuarioComponent,
    EliminarEncuestaComponent,
    EliminarEmpresaComponent,
    RegistrarAdministradorComponent,
    RegistrarUsuarioComponent,
    EditarCuentaComponent
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
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
