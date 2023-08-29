import { createLogger, transports, format } from 'winston';
import environment from './environment';
const { combine, printf, timestamp, colorize, json } = format;

const getTransports = (() => {
  const transportConfig = [
    new transports.Console({
      format: combine(
        timestamp(),
        colorize(),
        printf(({ level, message, timestamp }) => `${timestamp} [${level}] : ${message}`)
      ),
    }),
  ];
  if (!environment.isDev) {
    transports.push(
      new transports.File({
        filename: './logs/info.log',
        level: 'warn',
        format: combine(timestamp(), json()),
      })
    );
  }
  return transportConfig;
})();

const logger = createLogger({
  level: environment.isDev ? 'debug' : 'warn',
  transports: getTransports,
});

export default logger;
