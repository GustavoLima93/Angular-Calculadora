
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';


import { CalculadoraModule } from './calculadora';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule,
    MaterializeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
