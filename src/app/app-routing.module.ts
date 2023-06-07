import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

//DEFINICION PARA CADA UNA DE LAS RUTAS
const routes: Routes = [
    {
        path: '',
        component: HomePageComponent   
    },
    {
        path: 'about',
        component: AboutPageComponent   
    },
    {
        path: 'contact',
        component: ContactPageComponent     
    },
    {
        path:'countries'
    },
    // EL PATH '**' HACE REFERENCIA A CUALQUIER RUTA QUE NO SE HAYA DEFINIDO ANTERIORMENTE, POR LO CUAL AUTOMATICAMENTE SERÁ DIRIGIDA AL 'home'
    {
        path:'**',
        redirectTo:''
    }
]


@NgModule({
    imports:[
        //!COMO ESTE ES NUETRO ROOT PRINCIPAL DEL PROYECTO, COLOCAREMOS 'forRoot' Y COMO ARGUMENTOS MANDAMOS LA CONSTANTE 'routes' EL CUAL CONTIENE LA DEFINICION DE LAS RUTAS.
        //*SOLO DEBE HABER UN 'forRoot' PARA TODA LA APLICACIÓN. EN TODO CASO SE DESEE IMPORTER OTROS MODULOS DE RUTA, SE TENDRA QUE UTILIZAR EL 'forChild' PARA LAS RUTAS HIJAS
        RouterModule.forRoot(routes)
    ],
    exports:[
        //*DEBEMOS EXPORTAR NUESTRO 'ROUTERMODULE' PARA PODER UTILIZARLO EN EL app.module.ts 
        RouterModule
    ]
})
//!EL NOMBRE DE ESTA CLASE 'AppRoutingModule' DEBEMOS IMPORTARLO EN EL app.module.ts
export class AppRoutingModule { }
