import { Component } from '@angular/core';
import { EmployeeComponent } from "./employee/employee.component";

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent],
  template: `<app-employee/>
  `,
  // styleUrl: './app.component.scss',
  // templateUrl: './app.component.html',  
})
export class AppComponent {
}