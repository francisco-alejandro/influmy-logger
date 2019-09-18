const winston = jest.genMockFromModule('winston');

winston.config = {
  npm: {
    levels: {
      error: 0,
      warn: 1,
      info: 2,
      verbose: 3,
      debug: 4,
      silly: 5,
    },
  },
};

winston.format = {
  combine: jest.fn(),
  colorize: jest.fn(),
  simple: jest.fn(),
};

winston.transports = {
  Console: jest.fn(),
};

winston.createLogger = jest.fn();

module.exports = winston;
