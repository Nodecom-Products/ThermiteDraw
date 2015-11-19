/**
 * TopPage
 *
 * @package Controller
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var router = require('express').Router({caseSensitive: true});

/* rendering page. */
router.get('/createroom', function (req, res, next) {
  res.render('top/createRoom', {});
});

router.get('/roomlist', function (req, res, next) {
  res.render('top/roomList', {});
});

router.get('/', function (req, res, next) {
  res.render('top/index', {});
});

module.exports = router;
