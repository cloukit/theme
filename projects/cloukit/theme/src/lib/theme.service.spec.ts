import { TestBed, inject } from '@angular/core/testing';

import { CloukitThemeService } from './theme.service';

describe('CloukitThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloukitThemeService]
    });
  });

  it('should be created', inject([CloukitThemeService], (service: CloukitThemeService) => {
    expect(service).toBeTruthy();
  }));
});
