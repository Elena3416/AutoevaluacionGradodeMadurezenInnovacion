import { NavBarComponent } from './app/Component/nav-bar/nav-bar.component';
import { CambioPasswordComponent } from './app/Component/Formularios/cambio-password/cambio-password.component';
import { RegistrarEmpresaComponent } from './app/Component/Formularios/registrar-empresa/registrar-empresa.component';
import { EncuestasComponent } from './app/Component/encuestas/encuestas.component';
import { RegistrarUsuarioComponent } from './app/Component/Formularios/registrar-usuario/registrar-usuario.component';
import { InicioSesionComponent } from './app/Component/Formularios/inicio-sesion/inicio-sesion.component';
import { PaginaInicialComponent } from './app/Component/pagina-inicial/pagina-inicial.component';

import { Routes, RouterModule } from '@angular/router';

const Rutas: Routes = [

    { path: 'paginainicial', component:PaginaInicialComponent},
    { path: 'navbar', component:NavBarComponent},
    { path: 'registrarusuario', component:RegistrarUsuarioComponent},
    { path: 'iniciarsesion', component: InicioSesionComponent},
    { path: 'registrarempresa', component:RegistrarEmpresaComponent},
    { path: 'encuestas', component:EncuestasComponent},
    { path:'cambiarpassword', component:CambioPasswordComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'paginainicial'}
];

export const APP_ROUTES = RouterModule.forRoot( Rutas, {useHash:true});