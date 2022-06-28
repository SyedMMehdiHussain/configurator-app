import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CruiseControlService } from './cruise-control.service';
import { CruiseControl } from './cruiseControl';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { Order } from './order';
import { OrderService } from './order.service';
import { Trim } from './trim';
import { TrimService } from './trim.service';
import { Truck } from './truck';
import { TruckService } from './truck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public orders : Order[] | undefined;
  public trims : Trim[] | undefined;
  public trucks : Truck[] | undefined;
  public cruiseControls : CruiseControl[] | undefined;
  public customers : Customer[] | undefined;
  public order: Order | undefined;

  constructor(
    private orderService: OrderService,
    private truckService : TruckService,
    private trimService : TrimService,
    private cruiseControlService : CruiseControlService,
    private customerService : CustomerService
    ){}


  ngOnInit(): void {
    this.getOrders();
    this.getTrims();
    this.getTrucks();
    this.getCruiseControls();
  }

  public getOrders(): void {
    this.orderService.getOrders().subscribe(
      (response: Order[]) => {
        this.orders = response;
        console.log(this.orders);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public getTrims(): void {
    this.trimService.getTrims().subscribe(
      (response: Trim[]) => {
        this.trims = response;
        console.log(this.orders);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getTrucks(): void {
    this.truckService.getTrucks().subscribe(
      (response: Truck[]) => {
        this.trucks = response;
        console.log(this.orders);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCruiseControls(): void {
    this.cruiseControlService.getCruiseControls().subscribe(
      (response: CruiseControl[]) => {
        this.cruiseControls = response;
        console.log(this.orders);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
        console.log(this.orders);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSubmit(orderForm: NgForm): void{
    let sendOrder : Order = {
      truckId: orderForm.value.truck.id,
      cruiseControlId: orderForm.value.cruiseControl.id,
      trimId: orderForm.value.trim.id,
      id: 0,
      totalPrice: orderForm.value.truck.price + orderForm.value.trim.price + orderForm.value.cruiseControl.price
    }

    this.orderService.addOrder(sendOrder).subscribe(
      (response: Order) => {
        console.log(response);
        orderForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        orderForm.reset();
      },
    );

    let sendCustomer : Customer = {
      id: 0,
      name: orderForm.value.name
    }

    this.customerService.addCustomer(sendCustomer).subscribe(
      (response: Customer) => {
        console.log(response);
        orderForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        orderForm.reset();
      },
    );
    
  }




  title = 'configurator-app';
}
