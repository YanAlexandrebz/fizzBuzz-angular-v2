import { NumeroDirective } from './numero.directive';

describe('NumeroDirective', () => {
  it('should create an instance', () => {
    const directive = new NumeroDirective();
    expect(directive).toBeTruthy();
  });

  it('deve remover caracteres não numéricos', () => {
    const directive = new NumeroDirective();
    let $event = {
      target: {
        value: '1a2b3c'
      }
    };
    directive.onKeyup($event);
    expect($event.target.value).toBe('123');
  });


});
