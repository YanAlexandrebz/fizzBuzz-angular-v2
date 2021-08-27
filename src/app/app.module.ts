import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FizzBuzzComponent } from './componentes/fizz-buzz/fizz-buzz.component';
import { NumeroDirective } from './diretivas/numero.directive';
import { RetornoPipe } from './filtros/retorno.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FizzBuzzComponent,
    NumeroDirective,
    RetornoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
