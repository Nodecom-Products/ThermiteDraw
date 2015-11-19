"use strict";

/**
 * CreateRoom script
 *
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var funcConst = require('./constant');

$(function () {}, false);

$(document).on("click", ".btnYes", function () {
  $("#modalSetPwd").modal("show");
});
$(document).on("click", ".btnNo", function () {
  location.href = funcConst.constList.BASE_URL + "sharespace";
});
$(document).on("click", "#btnSetPwd", function () {
  // location.href = constList.BASE_URL + "sharespace";
});
