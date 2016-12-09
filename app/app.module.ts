import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CustomerComponent } from './customers.component';
import { CustomerDetailComponent } from './customer-detail.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
