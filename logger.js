/**
 * Logger(Log4js)
 *
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var log4js = require('log4js');
log4js.configure('log4js_settings.json', {});

var logger;
switch (process.env.NODE_ENV) {
  case 'development':
    logger = log4js.getLogger('debug');
  break;
  case 'production':
    logger = log4js.getLogger('production');
  break;
}
module.exports = logger;
