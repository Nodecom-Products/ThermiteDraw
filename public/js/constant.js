"use strict";

/**
 * 定数定義
 *
 *   正確には定数を定義しているわけではないので値の上書きは可能。
 *   なので、ルールとして上書きを禁止する。
 *
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

(function () {
  $.getJSON('/conf/env.json', function (data) {
    var ENV = data.env;

    $.getJSON('/conf/const.json', function (objConst) {
      exports.constList = objConst[ENV];
    });
  });
})();
