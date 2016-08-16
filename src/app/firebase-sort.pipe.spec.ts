/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FirebaseSortPipe } from './firebase-sort.pipe';

describe('Pipe: FirebaseSort', () => {
  it('create an instance', () => {
    let pipe = new FirebaseSortPipe();
    expect(pipe).toBeTruthy();
  });
});
