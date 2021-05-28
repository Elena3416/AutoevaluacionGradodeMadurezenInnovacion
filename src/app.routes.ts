import { EditarCuentaComponent } from './app/Component/Cuenta/editar-cuenta/editar-cuenta.component';
import { RegistrarAdministradorComponent } from './app/Component/Formularios/Registros/registrar-administrador/registrar-administrador.component';
import { RegistrarUsuarioComponent } from './app/Component/Formularios/Registros/registrar-usuario/registrar-usuario.component';
import { MiCuentaComponent } from './app/Component/Cuenta/mi-cuenta/mi-cuenta.component';
import { InicioComponent } from './app/Component/inicio/inicio.component';
import { EliminarUsuarioComponent } from './app/Component/Formularios/Eliminar/eliminar-usuario/eliminar-usuario.component';
import { EliminarEmpresaComponent } from './app/Component/Formularios/Eliminar/eliminar-empresa/eliminar-empresa.component';
import { BuscarUsuarioComponent } from './app/Component/Formularios/Busquedas/buscar-usuario/buscar-usuario.component';
import { ModificarEmpresaComponent } from './app/Component/Formularios/Modificar/modificar-empresa/modificar-empresa.component';
import { RegistrarEmpresaComponent } from './app/Component/Formularios/Registros/registrar-empresa/registrar-empresa.component';
import { BuscarEncuestaComponent } from './app/Component/Formularios/Busquedas/buscar-encuesta/buscar-encuesta.component';
import { ModificarEncuestaComponent } from './app/Component/Formularios/Modificar/modificar-encuesta/modificar-encuesta.component';
import { EncuestasComponent } from './app/Component/Formularios/Registros/registrar-encuestas/encuestas.component';
import { ModificarUsuarioComponent } from './app/Component/Formularios/Modificar/modificar-usuario/modificar-usuario.component';
import { NewPasswordComponent } from './app/Component/Formularios/Passwords/new-password/new-password.component';
import { InicioSesionComponent } from './app/Component/Formularios/Login/inicio-sesion/inicio-sesion.component';
import { NavBarComponent } from './app/Component/nav-bar/nav-bar.component';
import { CambioPasswordComponent } from './app/Component/Formularios/Passwords/cambio-password/cambio-password.component';
import { PaginaInicialComponent } from './app/Component/pagina-inicial/pagina-inicial.component';
import { BuscarEmpresaComponent } from './app/Component/Formularios/Busquedas/buscar-empresa/buscar-empresa.component';
import { EliminarEncuestaComponent } from './app/Component/Formularios/Eliminar/eliminar-encuesta/eliminar-encuesta.component';

import { Routes, RouterModule } from '@angular/router';

const Rutas: Routes = [

    { path: 'inicio', component:InicioComponent},
    { path: 'navbar', component:NavBarComponent},
    { path: 'micuenta', component:MiCuentaComponent},
    { path: 'paginainicial', component:PaginaInicialComponent},
    { path: 'iniciarsesion', component: InicioSesionComponent},
    { path: 'registraradministrador', component:RegistrarAdministradorComponent},
    { path: 'modificarcuenta', component:EditarCuentaComponent},
    { path: 'registrarusuario', component: RegistrarUsuarioComponent},
    { path: 'modificarusuario', component:ModificarUsuarioComponent},
    { path: 'busquedausuario',  component:BuscarUsuarioComponent},
    { path: 'eliminarusuario', component:EliminarUsuarioComponent},
    { path: 'registrarempresa', component:RegistrarEmpresaComponent},
    { path: 'busquedaempresa', component:BuscarEmpresaComponent},
    { path: 'modificarempresa', component:ModificarEmpresaComponent},
    { path: 'eliminarempresa', component:EliminarEmpresaComponent},
    { path: 'registrarencuesta', component:EncuestasComponent},
    { path: 'busquedaencuesta', component:BuscarEncuestaComponent},
    { path: 'modificarencuesta', component:ModificarEncuestaComponent},
    { path: 'eliminarencuesta', component:EliminarEncuestaComponent},
    { path:'cambiarpassword', component:CambioPasswordComponent},
    { path:'newpassword', component:NewPasswordComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'paginainicial'}
];

export const APP_ROUTES = RouterModule.forRoot( Rutas, {useHash:true});