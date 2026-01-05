import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { LevelPipe } from '../level.pipe';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [LevelPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  Employee: Employee = {
    "_id": "675173e704ea0d53bbcdb314",
    "name": "User Tooto",
    "department": "IT",
    "level": "J"
  }
}
