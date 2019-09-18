import winston from 'winston';

export const levels = winston.config.npm.levels;

const setLevel = ({ level }) => {
  const possible = Object.keys(levels).find(key => levels[key] === level);

  return possible || setLevel({ level: levels.info });
};

function Logger({ level }) {
  return winston.createLogger({
    level: setLevel({ level }),
    levels,
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        ),
      }),
    ],
  });
}

export default Logger;
