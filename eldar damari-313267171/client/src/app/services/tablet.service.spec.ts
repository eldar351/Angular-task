import { TestBed } from '@angular/core/testing';

import { TabletService } from './tablet.service';

describe('TabletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabletService = TestBed.get(TabletService);
    expect(service).toBeTruthy();
  });
});
