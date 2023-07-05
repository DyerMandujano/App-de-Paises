import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesServices } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  //LE COLOCAMOS EL '?' PORQUE PUEDE SER NULL
  public country?: Country;

  constructor( private activatedRoute: ActivatedRoute,
              private countriesService: CountriesServices,
              private router: Router
              ){}

  ngOnInit(): void {
    //!ESTE ES UN 'OBSERVABLE HELP'
    this.activatedRoute.params.
    //?El 'switchMap' NOS SIRVE PARA RECIBIR EL VALOR ANTERIOR (QUE EN ESTE CASO SERIAN LOS 'params') Y NOS RETORNE UN NUEVO OBSERVABLE TRAYENDONOS LOS DATOS MAS ACTUALIZADOS Y CONSISTENTES.
    //Desestructuramos el objeto 'params' y extraemos el valor del parámetro 'id'. Este 'id' Lo DEFINIMOS EN EL countries-routing.module.ts
    pipe(switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id)))
    //NOS SUSCRIBIMOS AL ULTIMO OBSERVABLE QUE NOS TRAJO EL 'switchMap'
    .subscribe((country) =>{

      //?SI EL 'country' ES NULL
     if(!country){
      //?NOS REDIRIGE A LA URL ''
      return this.router.navigateByUrl('');
     }
     //DE LO CONTRARIO SE IMPRIME EN CONSOLA ESTE MENSAJE
     console.log("SE ENCONTRÓ EL PAIS");
     this.country = country;
    //  CON EL 'return' FINALIZA EL CODIGO 
      return;



  
      //?ESTE CODIGO LO REEMPLAZAMOS POR EL METODO 'searchCountry'
      //Imprimimos en consola un objeto con la propiedad 'parametro', el cual tiene como valor el 'id'
      // console.log({parametro:id});
      // this.countriesService.searchCountryByAlphaCode(id).subscribe(country =>{
      //   console.log({country});
      // })
    })
  }

  searchCountry(code: string){
     this.countriesService
     //LLAMAMOS AL SERVICIO PARA CONSUMIRLE, EL CUAL LE TENEMOS Q PASAR COMO PARAMETRO UN CODIGO
       .searchCountryByAlphaCode(code)
       //COMO ES UN OBSERVABLE, NOS TENEMOS QUE SUSCRIBIR PARA Q NOS RETORNE EL PAIS EN CUESTION
       .subscribe((country) => {
         console.log({ country });
       });
  }
  
}

