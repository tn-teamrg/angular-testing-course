import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';

describe('CalculatorService', () => {
  let calculator: CalculatorService,
    // NOTE: loggerSpy can return a variety of values
    loggerSpy: any;

  beforeEach(() => {
    console.log('calling before');

    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(loggerSpy);
  });

  it('should add two numbers', () => {
    console.log('add test');

    const result = calculator.add(2, 2);
    expect(result).toBe(4, 'Unexpected addition result');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('subtract test');

    const result = calculator.subtract(2, 2);
    expect(result).toBe(0, 'Unexpected subtraction result');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
