interface Levels {
  error: number,
  warn: number,
  info: number,
  verbose: number,
  debug: number,
  silly: number
}

interface LoggerOption {
  level: number,
}

declare class Logger {
  constructor(options: LoggerOption);
  error(...params: any[]): void;
  info(...params: any[]): void;
  debug(...params: any[]): void;
}

declare const levels: Levels;

export default Logger;
export {
  levels,
}
