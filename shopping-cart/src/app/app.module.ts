import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,Ng2SearchPipeModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
         CurrencyPipe
     ]
})
export class AppModule { }
