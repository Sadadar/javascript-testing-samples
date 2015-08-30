var winston = require('winston');
var config = require('config');

var winstonLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)()
  ],
  levels: config.loginfo.levels,
  colorize: 'true',
  colors: config.loginfo.colors
});

winstonLogger.cli();

exports.logger = winstonLogger;
