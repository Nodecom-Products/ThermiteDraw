/**
 * Socket.IO
 *
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

module.exports = function (app, pjConf) {
  var debug  = require('debug')('ThermiteDraw:server');
  var util   = require('util');
  var logger = require('./logger');
  var http   = require('http').Server(app);
  var io     = require('socket.io')(http);

  io.on('connection', function (socket) {
    logger.debug('UserID -> ' + util.inspect(socket.id, {showHidden: true, depth: null}));
    logger.debug('Rooms -> ' + util.inspect(socket.rooms, {showHidden: true, depth: null}));

    socket.on('getRoomList', function () {
      logger.debug('getRoomList - Rooms -> ' + util.inspect(socket.rooms, {showHidden: true, depth: null}));
      socket.emit('getRoomList', socket.rooms);
    });

    socket.on('draw', function (data) {
      socket.broadcast.emit('draw', data);
    });

    socket.on('color', function (color) {
      socket.broadcast.emit('color', color);
    });

    socket.on('lineWidth', function (width) {
      socket.broadcast.emit('lineWidth', width);
    });

    socket.on('delete', function () {
      socket.broadcast.emit('delete');
    });
  });

  /**
   * Get port from environment and store in Express.
   */
  var port = normalizePort(pjConf.PORT);
  app.set('port', port);
  http.listen(port, function () {});

  io.on('error', onError);
  io.on('listening', onListening);

  /**
   * Normalize a port into a number, string, or false.
   */
  function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
      break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
      break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    var addr = io.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

  module.exports = app;
};
