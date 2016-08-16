/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ScreenRadioComponent } from './screen-radio.component';

describe('Component: ScreenRadio', () => {
  it('should create an instance', () => {
    let component = new ScreenRadioComponent(null);
    expect(component).toBeTruthy();
  });
});
