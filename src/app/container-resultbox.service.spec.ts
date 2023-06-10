import { TestBed } from '@angular/core/testing';

import { ContainerResultboxService } from './container-resultbox.service';

describe('ContainerResultboxService', () => {
  let service: ContainerResultboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerResultboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
