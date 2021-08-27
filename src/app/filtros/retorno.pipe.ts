import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retorno'
})
export class RetornoPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    return 'Exibindo os primeiros ' + value + ' resultados.';
  }

}
