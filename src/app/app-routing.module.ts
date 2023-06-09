import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

//DEFINICION PARA CADA UNA DE LAS RUTAS
const routes: Routes = [
    // {
    //     path: '',
    //     component: HomePageComponent   
    // },
    {
        path: 'about',
        component: AboutPageComponent   
    },
    {
        path: 'contact',
        component: ContactPageComponent     
    },
    {
        //*PARA ACCEDER A LAS RUTAS HIJAS UTILIZAMOS UN LazyLoad(CARGA PEREZOSA)
        //TENEMOS QUE ASIGNAR UNA RUTA(que en este caso es 'countries') PARA PODER ACCEDER AL MODULO EN DONDE SE ENCUENTRAN LAS DEMAS RUTAS HIJAS.
        path:'countries',
        //?PARA ELLO UTILIZAMOS LA PROPIEDAD 'loadChildren', EN EL CUAL TENDRA UNA PROMESA 'import' Y COMO ARGUMENTO LE DEBEMOS PASAR EL 'path' EN DONDE SE ENCUENTRA EL MODULO QUE QUEREMOS IMPORTAR, LUEGO DE ELLO SI LA PROMESA ESTA CORRECTA, SE UTILIZARÁ UN 'then' EN EL CUAL UTILIZANDO LA VARIABLE 'm' PODEMOS ACCEDER AL 'CountriesModule'
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
        //!NOTA: EL PATH QUE TENDRIAMOS QUE COLOCAR EN LA APLICACION SERIA LA SIGUIENTE: 'countries/by-capital'
        //*NOTA2: EL path 'by-capital' ESTA DEFINIDO EN EL ARCHIVO countries-routing.module.ts
    },
    // EL PATH '**' HACE REFERENCIA A CUALQUIER RUTA QUE NO SE HAYA DEFINIDO ANTERIORMENTE, POR LO CUAL AUTOMATICAMENTE SERÁ DIRIGIDA A LA RUTA 'countries'
    //!ESTA RUTA 'countries' TIENE RUTAS HIJAS LAS CUALES SE ENCUENTRAN EN EL ARCHIVO 'countries-routing.module.ts'
    {
        path:'**',
        redirectTo:'countries'
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
