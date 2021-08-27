import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor() { }

  gerar(limite: number): string[] {
    const fizzBuzz: string[] = [];
    for ( let i = 0; i < limite; i++){
      if( (i+1) % 15 === 0){
        fizzBuzz.push('FizzBuzz');
      } else if ( (i+1) % 3 === 0){
        fizzBuzz.push('Fizz');
      } else if ( (i+1) % 5 === 0){
        fizzBuzz.push('Buzz');
      } else {
        fizzBuzz.push((i + 1).toString());
      }
    }
    return fizzBuzz;
  } 
}
