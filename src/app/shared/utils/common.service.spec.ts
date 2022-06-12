import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return -1 if first lowercase string is less than second lowercase string', () => {
    expect(service.compare('a', 'z')).toBe(-1);
  });

  it('should return -1 if first uppercase string is less than second uppercase string', () => {
    expect(service.compare('A', 'Z')).toBe(-1);
  });

  it('should return 1 if first lowercase string is greater than second lowercase string', () => {
    expect(service.compare('z', 'a')).toBe(1);
  });

  it('should return 1 if first uppercase string is greater than second uppercase string', () => {
    expect(service.compare('Z', 'A')).toBe(1);
  });

  it('should return 0 if first string is equal to second string', () => {
    expect(service.compare('ABC', 'ABC')).toBe(0);
  });

  it('should return -1 if first number is less than second number', () => {
    expect(service.compare('1', '100')).toBe(-1);
  });

  it('should return 0 if first number is equal to second number', () => {
    expect(service.compare('5', '5')).toBe(0);
  });

  it('should return 1 if first number is greater than second number', () => {
    expect(service.compare('100', '1')).toBe(1);
  });
});
