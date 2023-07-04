import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesServices {

    private apiUrl:string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCapital(term:string):Observable<Country[]>{
      
        //*EN ESTA LINEA ESTAMOS DEFINIENDO EL RETORNO DEL METODO GET QUE SEA UN ARREGLO DE TIPO INTERFACE 'Country'
        //!NOTA: SI NO HAY NINGUN 'suscribe' ESTA PETICIÓN SOLO SE ESTÁ DEFINIENDO MÁS NO EJECUTANDOSE.
        //!ES DECIR, EN EL MOMENTO QUE NOS 'SUSCRIBRAMOS' AL 'OBSERVABLE' EN ESE INSTANTE RECIEN SE REALIZARÁ LA PETICIÓN GET HTTP.
        
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).
        //?Los OBSERVABLES tienen un metodo llamado 'pipe', este nos sirve para especificar diferentes operadores de rxjs. Los operadores rxjs nos permiten personalizar/transformar el flujos de datos que que retorna el observable.
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
    
}