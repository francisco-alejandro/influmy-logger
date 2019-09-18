import Logger from './logger';

jest.mock('winston');

describe('logger', () => {
  const winston = require('winston');
  const level = 'info';

  it('should set info level if not option provided', () => {
    new Logger({});

    expect(winston.createLogger)
      .toBeCalledWith(expect.objectContaining({ level }));
  });
});
