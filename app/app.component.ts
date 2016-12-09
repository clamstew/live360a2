import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <my-customer></my-customer>
  `,
})
export class AppComponent  {
  name = 'John Papa';
}

