/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ScreenInventoryComponent } from './screen-inventory.component';

describe('Component: ScreenInventory', () => {
  it('should create an instance', () => {
    let component = new ScreenInventoryComponent(null);
    expect(component).toBeTruthy();
  });
});
