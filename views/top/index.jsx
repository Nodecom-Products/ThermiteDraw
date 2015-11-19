/**
 * TopPage Content
 *
 * @package View
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var React   = require('react');
var ReactBS = require('react-bootstrap');

var HtmlHead = require('../common/partials/htmlHead_default');

var Content = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'ThermiteDraw - TOP',
      cssFile: '/css/top.css',
      jsFile: '/js/dist/top.js'
    };
  },
  render: function() {
    return (
      <html lang="ja">
      <HtmlHead title={this.props.title} cssFilePath={this.props.cssFile} jsFilePath={this.props.jsFile}></HtmlHead>
      <body>
        {/* container */}
        <div className="container-fluid">
          <h1 className="titleWords welcome">Welcome to</h1>
          <h1 className="titleWords">ThermiteDraw</h1>
          <div className="createRoom">
            <ReactBS.Button className="btnCreateRoom" bsStyle="success">Create Room</ReactBS.Button>
          </div>
          <div className="roomList">
            <ReactBS.Button className="btnRoomList" bsStyle="success">Room List</ReactBS.Button>
          </div>
        </div>
        {/* /container */}
      </body>
      </html>
    );
  }
});

module.exports = Content;
