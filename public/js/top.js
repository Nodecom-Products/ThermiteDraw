"use strict";

/**
 * TopPage script
 *
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var funcConst = require('./constant');

$(function () {}, false);

$(document).on("click", ".btnCreateRoom", function () {
  location.href = funcConst.constList.BASE_URL + "createroom";
});
$(document).on("click", ".btnRoomList", function () {
  location.href = funcConst.constList.BASE_URL + "roomlist";
});
