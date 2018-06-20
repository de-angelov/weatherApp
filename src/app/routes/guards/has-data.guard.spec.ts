import { TestBed, async, inject } from '@angular/core/testing';

import { HasDataGuard } from './has-data.guard';

describe('HasDataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HasDataGuard]
    });
  });

  it('should ...', inject([HasDataGuard], (guard: HasDataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
