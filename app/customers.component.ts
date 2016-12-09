import { Component } from '@angular/core';

import { Customer } from './customer';

@Component({
    moduleId: module.id,
    selector: 'my-customer',
    templateUrl: 'customers.component.html',
    styleUrls: ['customers.component.css']
})
export class CustomerComponent {
    customers = [
      new Customer(1, 'John', 'Florida'),
      new Customer(2, 'Ward', 'South Pole'),
      new Customer(3, 'Jesse', 'Disney'),
    ];
    selectedCustomer: Customer; // = this.customers[0];

    isSelected(c: Customer) {
        return this.selectedCustomer === c;
    }

    selectIt(c: Customer) {
        this.selectedCustomer = c;
    }
}
