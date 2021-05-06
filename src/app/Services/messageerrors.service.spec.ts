import { TestBed } from '@angular/core/testing';

import { MessageerrorsService } from './messageerrors.service';

describe('MessageerrorsService', () => {
  let service: MessageerrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageerrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
