import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServices } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = []
  constructor(private countriesservice:CountriesServices){}

  //Consumimos el Servicio
  searchByRegion(term: string):void{
    this.countriesservice.searchRegion(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
