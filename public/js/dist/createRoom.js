/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * CreateRoom script
	 *
	 * @author T.Shoji <t.shoji@nodecom.jp>
	 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
	 */

	var funcConst = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);