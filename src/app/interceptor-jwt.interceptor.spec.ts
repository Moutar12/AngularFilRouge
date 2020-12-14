import { TestBed } from '@angular/core/testing';

import { InterceptorJwtInterceptor } from './interceptor-jwt.interceptor';

describe('InterceptorJwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorJwtInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorJwtInterceptor = TestBed.inject(InterceptorJwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
