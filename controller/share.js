/**
 * ShareSpace
 *
 * @package Controller
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var router = require('express').Router({caseSensitive: true});

/* rendering page. */
router.get('/', function (req, res, next) {
  res.render('share/index', {});
});

module.exports = router;
