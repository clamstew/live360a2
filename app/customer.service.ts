import { Injectable } from '@angular/core';

import { Customer } from './customer';

@Injectable()
export class CustomerService {
  constructor() { }

  getCustomers() {
    return [
      new Customer(1, 'John', 'Florida'),
      new Customer(2, 'Ward', 'South Pole'),
      new Customer(3, 'Jesse', 'Disney'),
    ];
  }
}
