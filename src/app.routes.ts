import { RegistrarEmpresaComponent } from './app/Component/registrar-empresa/registrar-empresa.component';
import { EncuestasComponent } from './app/Component/encuestas/encuestas.component';
import { ContactoComponent } from './app/Component/contacto/contacto.component';
import { RegistrarUsuarioComponent } from './app/Component/registrar-usuario/registrar-usuario.component';
import { InicioSesionComponent } from './app/Component/inicio-sesion/inicio-sesion.component';
import { PaginaInicialComponent } from './app/Component/pagina-inicial/pagina-inicial.component';

import { Routes, RouterModule } from '@angular/router';

const Rutas: Routes = [

    { path: 'paginainicial', component:PaginaInicialComponent},
    { path: 'registrarusuario', component:RegistrarUsuarioComponent},
    { path: 'iniciarsesion', component: InicioSesionComponent},
    { path: 'contacto', component:ContactoComponent},
    { path: 'registrarempresa', component:RegistrarEmpresaComponent},
    { path: 'encuestas', component:EncuestasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'paginainicial'}
];

export const APP_ROUTES = RouterModule.forRoot( Rutas, {useHash:true});