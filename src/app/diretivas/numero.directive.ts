import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numero]'
})
export class NumeroDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    $event.target.value = $event.target.value.replace(/\D/g, '');
  }

}
