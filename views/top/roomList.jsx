/**
 * RoomList Content
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
      title: 'ThermiteDraw - RoomList',
      cssFile: '/css/RoomList.css',
      jsFile: '/js/dist/roomList.js'
    };
  },
  render: function() {
    return (
      <html lang="ja">
      <HtmlHead title={this.props.title} cssFilePath={this.props.cssFile} jsFilePath={this.props.jsFile}></HtmlHead>
      <body>
        {/* container */}
        <div className="container-fluid">
          <h1>RoomList</h1>
        </div>
        {/* /container */}
      </body>
      </html>
    );
  }
});

module.exports = Content;
