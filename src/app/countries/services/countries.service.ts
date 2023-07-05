import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesServices {

    private apiUrl:string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode(code:string):Observable<Country | null>
    {
        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
            //El 'map' NOS SIRVE PARA TRANSFORMAR LA INFORMACION
            //?El parametro 'countries' ES UN ARRAY DE TIPO INTERFAZ 'COUNTRY' 
            
            map(countries => 
                //*SI LA LONGITUD DEL ARRAY CONTRIES ES MAYOR A 0, SELECCIONA EL ELEMENTO QUE SE ENCUENTRE EN EL INDICE [0]. DE LO CONTRARIO, DEVUELVE 'NULL'
                countries.length >0 ? countries[0] : null),
            //?El metodo 'of' sirve para construir un OBSERVABLE basado en los argumentos que se le pase.
            //ES DECIR, EN ESTA LINEA ATRAPA EL ERROR Y POR CONSOLA NOS DA TODA LA INFORMACIÓN DE ESTE Y RETORNA UN OBSERVABLE 'null'
        catchError( () => of(null))

        
        // catchError(error => {
        //     console.log(error);
        //     return of([]);
        // })
        );
    }

    searchCapital(term:string):Observable<Country[]>{
      
        //*EN ESTA LINEA ESTAMOS DEFINIENDO EL RETORNO DEL METODO GET QUE SEA UN ARREGLO DE TIPO INTERFACE 'Country'
        //!NOTA: SI NO HAY NINGUN 'suscribe' ESTA PETICIÓN SOLO SE ESTÁ DEFINIENDO MÁS NO EJECUTANDOSE.
        //!ES DECIR, EN EL MOMENTO QUE NOS 'SUSCRIBRAMOS' AL 'OBSERVABLE' EN ESE INSTANTE RECIEN SE REALIZARÁ LA PETICIÓN GET HTTP.
        
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).
        //?Los OBSERVABLES tienen un metodo llamado 'pipe', este nos sirve para especificar diferentes operadores de rxjs. Los operadores rxjs nos permiten personalizar/transformar los flujos de datos que retorna el observable.
        //!NOTA: SI SE UTILIZA UN PIPE, YA SEA : MAP, TAP, CATCH_ERROR, ES OBLIGATORIO QUE SE RETORNE EL MISMO TIPO DE DATO QUE EL OBSERVABLE O EN TODO CASO SE RETORNE UN OBSERBABLE VACIO YA QUE ESTOS PIPES ESTAN ENLAZADOS AL OBSERVABLE. 
        pipe(
            //?El metodo 'of' sirve para construir un OBSERVABLE basado en los argumentos que se le pase.
            //ES DECIR, EN ESTA LINEA ATRAPA EL ERROR Y POR CONSOLA NOS DA TODA LA INFORMACIÓN DE ESTE Y RETORNA UN OBSERVABLE VACIO
        catchError(error => {
            console.log(error);
            return of([]);
        })
        );
    }

    searchCountry(term: string): Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`).pipe(
            //?El metodo 'of' sirve para construir un OBSERVABLE basado en los argumentos que se le pase.
            //ES DECIR, EN ESTA LINEA ATRAPA EL ERROR Y POR CONSOLA NOS DA TODA LA INFORMACIÓN DE ESTE Y RETORNA UN OBSERVABLE VACIO
        catchError(error => {
            console.log(error);
            return of([]);
        })
        );
    }

    searchRegion(term: string): Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`).pipe(
            //?El metodo 'of' sirve para construir un OBSERVABLE basado en los argumentos que se le pase.
            //ES DECIR, EN ESTA LINEA ATRAPA EL ERROR Y POR CONSOLA NOS DA TODA LA INFORMACIÓN DE ESTE Y RETORNA UN OBSERVABLE VACIO
        catchError(error => {
            console.log(error);
            return of([]);
        })
        );
    }
    
}