/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminauthService } from './adminauth.service';

describe('AdminauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminauthService]
    });
  });

  it('should ...', inject([AdminauthService], (service: AdminauthService) => {
    expect(service).toBeTruthy();
  }));
});
