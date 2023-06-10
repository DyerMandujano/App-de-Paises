import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesServices {

    private apiUrl:string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCapital(term:string):Observable<Country[]>{
      
        //*EN ESTA LINEA ESTAMOS DEFINIENDO EL RETORNO DEL METODO GET QUE SEA UN ARREGLO DE TIPO INTERFACE 'Country'
        //!NOTA: SI NO HAY NINGUN 'suscribe' ESTA PETICIÓN SOLO SE ESTÁ DEFINIENDO MÁS NO EJECUTANDOSE.
        //!ES DECIR, EN EL MOMENTO QUE NOS 'SUSCRIBRAMOS' AL 'OBSERVABLE' EN ESE INSTANTE RECIEN SE REALIZARÁ LA PETICIÓN GET HTTP.
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`);
    }
    
}