import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TrimService } from './trim.service';
import { TruckService } from './truck.service';
import { CustomerService } from './customer.service';
import { CruiseControlService } from './cruise-control.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [OrderService,TrimService,TruckService,CustomerService,CruiseControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
