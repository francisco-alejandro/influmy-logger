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

declare function Logger(options: LoggerOption): any
declare const levels: Levels;

export default Logger;
export {
  levels,
}
