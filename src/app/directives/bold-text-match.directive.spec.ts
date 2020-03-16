import { inject } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms'
import { BoldTextMatchDirective } from './bold-text-match.directive';

describe('BoldTextMatchDirective', () => {
  it('should create an instance', () => {
    inject([ElementRef], (elementRef: ElementRef) => {
    const directive = new BoldTextMatchDirective(elementRef);
    expect(directive).toBeTruthy();
    });
  });
});

BoldTextMatchDirective
