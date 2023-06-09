import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholderInput: string = '';

  @Output()
  public OnValue: EventEmitter<string> = new EventEmitter();
  //otra forma para definir un EventEmitter:
  //public OnValue = new EventEmitter<string>();

  BusquedaPorCapital(tag:string):void{
    if(!tag)return;
    this.OnValue.emit(tag);
  }
}
