import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {animate, state, style, transition, trigger} from '@angular/animations';
import { EmployeeService } from '../get-employee-data.service';

export interface EmployeeData {
  id: number;
  age: number;
  name: string;
  gender: string;
  family_history: string;
  work_interference: string;
  remote_work: string;
  treatment_criticality: number;
  treatment: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'age',
    'gender',
    'family_history',
    'work_interference',
    'remote_work',
    'treatment_criticality',
  ];
  dataSource: MatTableDataSource<EmployeeData>;
  employees: EmployeeData[];
  errorMessage = '';
  expandedEmployee: EmployeeData;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private employeeService: EmployeeService ) {
    this.dataSource = new MatTableDataSource(this.employees);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.employeeService.getEmployees().subscribe({
    next: employees => {
      this.dataSource.data = employees;
    },
    error: err => this.errorMessage = err
  });
  }

  get_tier(treatment_criticality: number): string {
    if (treatment_criticality >= .8 ) { return 'Priority: High'; }
      else if (treatment_criticality >= .6) { return 'Priority: Moderate'; }
      else { return 'Priority: Low'; }
  }
}
