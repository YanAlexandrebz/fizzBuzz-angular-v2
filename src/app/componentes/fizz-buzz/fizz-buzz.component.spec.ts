import { RetornoPipe } from './../../filtros/retorno.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzComponent } from './fizz-buzz.component';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzComponent, RetornoPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve gerar os primeiros 20 resultados para o FizzBuzz', () => {
    // *************** Referencias dos objetos ***************
    const element: HTMLElement = fixture.nativeElement;
    //cria uma instancia do input atraves do ID
    const limiteInput: HTMLInputElement = element.querySelector('#limite')!;
    //cria uma instancia do button atraves do ID
    const btnGerar: HTMLButtonElement = element.querySelector('#btnGerar')!;
   
    // *************** Execução das ações ***************
    //Adiciona ao campo de texto o valor 20
    limiteInput.value = '20';
    //chama o evento de keyup
    limiteInput.dispatchEvent(new Event('keyup'));
    //detecta as mudanças
    fixture.detectChanges();
    //acao de clicar no botao
    btnGerar.click();
    //detecta novamente as mudanças
    fixture.detectChanges();
    
    
    //traz todos os elemetos li do html e guarda em resultado
    const resultado: NodeListOf<HTMLLIElement> = element.querySelectorAll('li');
    const tituloResultado: HTMLHeadingElement = element.querySelector('.resultado')!;
   
    expect(resultado.length).toBe(20);
    expect(resultado.item(0).innerHTML).toContain('1');
    expect(resultado.item(2).innerHTML).toContain('Fizz');
    expect(resultado.item(4).innerHTML).toContain('Buzz');
    expect(resultado.item(14).innerHTML).toContain('FizzBuzz');
    expect(tituloResultado.innerHTML).toContain('Exibindo os primeiros 20 resultados');
  });
});


