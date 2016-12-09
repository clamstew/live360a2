import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-customer',
    templateUrl: 'customers.component.html',
    styleUrls: ['customers.component.css']
})
export class CustomerComponent {
    message: string;
    customers = [
      new Customer(1, 'John', 'Florida'),
      new Customer(2, 'Ward', 'South Pole'),
      new Customer(3, 'Jesse', 'Disney'),
    ];
    selectedCustomer: Customer; // = this.customers[0];

    isSelected(c: Customer) {
        return this.selectedCustomer === c;
    }
    showMessage() {
        this.message = `The customer name is ${this.selectedCustomer.name}`;
    }

    selectIt(c: Customer) {
        this.selectedCustomer = c;
    }
}

class Customer {
      constructor(public id: number, public name: string, public state: string){ }
}

