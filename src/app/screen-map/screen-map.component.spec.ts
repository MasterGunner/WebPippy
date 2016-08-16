/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ScreenMapComponent } from './screen-map.component';

describe('Component: ScreenMap', () => {
  it('should create an instance', () => {
    let component = new ScreenMapComponent(null);
    expect(component).toBeTruthy();
  });
});
