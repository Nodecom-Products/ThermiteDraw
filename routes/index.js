/**
 * Routing
 *
 * @package Route
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var routes = {
  demo: require('../controller/demo'),
  top: require('../controller/top'),
  share: require('../controller/share')
};

module.exports = function (app) {
  app.use('/demo', routes.demo);
  app.use('/', routes.top);
  app.use('/sharespace', routes.share);
};
