import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzBuzzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //it([param1 - descricao],[teste])
  it('deve retornar números para os primeiros elementos.', () => {
    const fizzBuzz: string[] = service.gerar(10);
    expect(fizzBuzz[0]).toBe('1');
    expect(fizzBuzz[1]).toBe('2');
  });

  it('deve retornar Fizz para múltiplos de 3.', () => {
    const fizzBuzz: string[] = service.gerar(10);
    expect(fizzBuzz[2]).toBe('Fizz');
    expect(fizzBuzz[5]).toBe('Fizz');
  });

  it('deve retornar Buzz para múltiplos de 5.', () => {
    const fizzBuzz: string[] = service.gerar(10);
    expect(fizzBuzz[4]).toBe('Buzz');
    expect(fizzBuzz[9]).toBe('Buzz');
  });

  it('deve retornar FizzBuzz para múltiplos de 15.', () => {
    const fizzBuzz: string[] = service.gerar(30);
    expect(fizzBuzz[14]).toBe('FizzBuzz');
    expect(fizzBuzz[29]).toBe('FizzBuzz');
  });

  it('deve retornar o número correto de elementos da lista.', () => {
    const fizzBuzz: string[] = service.gerar(15);
    expect(fizzBuzz.length).toBe(15);
  });

  it('deve retornar uma lista vazia para limite = 0.', () => {
    const fizzBuzz: string[] = service.gerar(0);
    expect(fizzBuzz.length).toBe(0);
  });

  it('deve retornar uma lista vazia para limite negativo.', () => {
    const fizzBuzz: string[] = service.gerar(-10);
    expect(fizzBuzz.length).toBe(0);
  });



  
});
