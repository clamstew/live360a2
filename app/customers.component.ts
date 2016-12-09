import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-customer',
  templateUrl: 'customers.component.html'
})
export class CustomerComponent {
  message: string;
  selectedCustomer = {id: 1, name: 'John', state: 'Florida' };
  showMessage() {
    this.message = `The customer name is ${this.selectedCustomer.name}`;
  }
}

