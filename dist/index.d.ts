interface Levels {
  error: number,
  warn: number,
  info: number,
  verbose: number,
  debug: number,
  silly: number
}

interface LoggerOption {
  level: Levels,
}

export interface LoggerModule {
  (levels: Levels): any;
  Logger: (options: LoggerOption) => any;
}

declare const logger: LoggerModule;
export default logger;
