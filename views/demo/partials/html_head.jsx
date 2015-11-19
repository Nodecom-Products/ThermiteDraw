/**
 * ShareRoom HtmlHead
 *
 * @package View
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var React = require('react');

var HtmlHead = React.createClass({
  render: function() {
    return (
      <head>
        <meta charSet="UTF-8" />
        <title>{this.props.title}</title>
        <meta name="author" content="T.Shoji" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />

        {/* styles */}
        <link type="text/css" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/demo.css" />
        {/* /styles */}

        {/* scripts */}
        <script charSet="UTF-8" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script charSet="UTF-8" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script charSet="UTF-8" src="/socket.io/socket.io.js"></script>
        <script charSet="UTF-8" src="/js/draw.js"></script>
        {/* /scripts */}
      </head>
    );
  }
});

module.exports = HtmlHead;
