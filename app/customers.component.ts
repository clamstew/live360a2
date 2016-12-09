import { Component } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'my-customer',
    templateUrl: 'customers.component.html',
    styleUrls: ['customers.component.css']
})
export class CustomerComponent {
    customers: Customer[];

    constructor(private customerService: CustomerService) {
        this.customers = this.customerService.getCustomers();
     }

    selectedCustomer: Customer; // = this.customers[0];

    isSelected(c: Customer) {
        return this.selectedCustomer === c;
    }

    selectIt(c: Customer) {
        this.selectedCustomer = c;
    }
}
