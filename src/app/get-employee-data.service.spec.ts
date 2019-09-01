import { TestBed } from '@angular/core/testing';

import { GetEmployeeDataService } from './get-employee-data.service';

describe('GetEmployeeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetEmployeeDataService = TestBed.get(GetEmployeeDataService);
    expect(service).toBeTruthy();
  });
});
