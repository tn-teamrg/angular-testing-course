import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';
import {TestBed} from '@angular/core/testing';
import {InjectFlags, ProviderToken} from '@angular/core';

describe('CalculatorService', () => {
  let calculator: CalculatorService,
    loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        // TODO: review details
        { provide: LoggerService, useValue: loggerSpy }
      ]
    });

    // NOTE: TestBed.inject() has type safety
    calculator = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    const result = calculator.add(2, 2);
    expect(result).toBe(4, 'Unexpected addition result');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0, 'Unexpected subtraction result');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
