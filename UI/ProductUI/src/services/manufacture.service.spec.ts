/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManufactureService } from './manufacture.service';

describe('Service: Manufacture', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManufactureService]
    });
  });

  it('should ...', inject([ManufactureService], (service: ManufactureService) => {
    expect(service).toBeTruthy();
  }));
});
