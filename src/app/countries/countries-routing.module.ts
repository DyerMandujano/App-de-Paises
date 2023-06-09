import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
    {
        path:'by-capital',
        component:ByCapitalPageComponent,
    },
    {
        path:'by-country',
        component:ByCountryPageComponent,
    },
    {
        path:'by-region',
        component:ByRegionPageComponent,
    },
    {
        path:'by/:id',
        component:CountryPageComponent,
    },
    // EL PATH '**' HACE REFERENCIA A CUALQUIER RUTA QUE NO SE HAYA DEFINIDO ANTERIORMENTE, POR LO CUAL AUTOMATICAMENTE SERÁ DIRIGIDA A LA RUTA 'by-capital'
    {
        path:'**',
        redirectTo:'by-capital'
    }
]

@NgModule({
    imports:[
        //!EN ESTE CASO UTILIZAMOS EL 'forChild' YA QUE SON RUTAS HIJAS Y ADEMAS YA TENEMOS LAS RUTAS PRINCIPALES QUE ES ENCUENTRAN EN EL app-routing.module.ts
        RouterModule.forChild(routes)
    ],
    exports:[
        //*DEBEMOS EXPORTAR NUESTRO 'ROUTERMODULE' PARA PODER UTILIZARLO EN EL countries.module.ts 
        RouterModule
    ]
})
export class CountriesRoutingModule { }
