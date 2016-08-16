/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { WebPippyService } from './web-pippy.service';

describe('WebPippy Service', () => {
  beforeEachProviders(() => [WebPippyService]);

  it('should ...',
      inject([WebPippyService], (service: WebPippyService) => {
    expect(service).toBeTruthy();
  }));
});
