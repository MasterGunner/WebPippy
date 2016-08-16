/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FalloutTypesService } from './fallout-types.service';

describe('FalloutTypes Service', () => {
  beforeEachProviders(() => [FalloutTypesService]);

  it('should ...',
      inject([FalloutTypesService], (service: FalloutTypesService) => {
    expect(service).toBeTruthy();
  }));
});
