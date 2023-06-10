import { Component } from '@angular/core';
import { CountriesServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = []
  constructor(private countriesservice:CountriesServices){}

  //Consumimos el Servicio
  searchByCapital(term: string):void{
    this.countriesservice.searchCapital(term).subscribe(countries => {
      this.countries = countries;
    });
  }

}
