"use strict";

/**
 * RoomList script
 *
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var funcConst = require('./constant');
var socket = io();
var roomList;

(function () {
  socket.emit('getRoomList');
})();

socket.on('getRoomList', function (rooms) {
});

$(document).on("click", ".roomLink", function () {});
