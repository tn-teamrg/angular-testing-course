import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';

describe('CalculatorService', () => {

  it('should add two numbers', () => {

    // NOTE: test to see logger only have been called only once
    const logger = new LoggerService();
    spyOn(logger, 'log');
    const calculator = new CalculatorService(logger);
    const result = calculator.add(2, 2);
    expect(result).toBe(4, 'Unexpected addition result');
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0, 'Unexpected subtraction result');
  });

});
