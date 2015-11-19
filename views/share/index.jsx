/**
 * ShareRoom Content
 *
 * @package View
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var React   = require('react');
var ReactBS = require('react-bootstrap');

var HtmlHead = require('../common/partials/htmlHead_useSocketIO');

var Content = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'ThermiteDraw - ShareSpace',
      cssFile: '/css/shareSpace.css',
      jsFile: '/js/draw.js'
    };
  },
  render: function() {
    return (
      <html lang="ja">
      <HtmlHead title={this.props.title} cssFilePath={this.props.cssFile} jsFilePath={this.props.jsFile}></HtmlHead>
      <body>
        {/* header */}
        <ReactBS.ButtonGroup id="headerMenu" justified>
          <ReactBS.DropdownButton title="Line-Weight" id="bg-nested-dropdown" data-toggle="dropdown">
            <ReactBS.MenuItem className="btnSmall">Small</ReactBS.MenuItem>
            <ReactBS.MenuItem className="btnMiddle">Middle</ReactBS.MenuItem>
            <ReactBS.MenuItem className="btnLarge">Large</ReactBS.MenuItem>
          </ReactBS.DropdownButton>
          <ReactBS.DropdownButton title="Color" id="bg-nested-dropdown" data-toggle="dropdown">
            <ReactBS.MenuItem className="btnWhite">White</ReactBS.MenuItem>
            <ReactBS.MenuItem className="btnRed">Red</ReactBS.MenuItem>
            <ReactBS.MenuItem className="btnBlue">Blue</ReactBS.MenuItem>
            <ReactBS.MenuItem className="btnYellow">Yellow</ReactBS.MenuItem>
          </ReactBS.DropdownButton>
          <ReactBS.DropdownButton title="Other" id="bg-nested-dropdown" data-toggle="dropdown">
            <ReactBS.MenuItem className="btnDel">Clear</ReactBS.MenuItem>
          </ReactBS.DropdownButton>
        </ReactBS.ButtonGroup>
        {/* /header */}
        {/* container */}
        <div className="container-fluid">
      		<div className="drawArea"><canvas id="drawCanvas"></canvas></div>
        </div>
        {/* /container */}
        <div className="bottomBar"></div>
      </body>
      </html>
    );
  }
});

module.exports = Content;
