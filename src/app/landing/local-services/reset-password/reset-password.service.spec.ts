import { TestBed } from '@angular/core/testing';

import { ResetPasswordService } from './reset-password.service';
import { HttpClientModule } from '@angular/common/http';

describe('ResetPasswordService', () => {
  let service: ResetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule],
    });
    service = TestBed.inject(ResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
