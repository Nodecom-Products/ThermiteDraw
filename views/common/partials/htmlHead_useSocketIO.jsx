/**
 * Common HtmlHead - Use Socket.IO
 *
 * @package View
 * @author T.Shoji <t.shoji@nodecom.jp>
 * @copyright 2012-2016 Nodecom Group All Rights Reserved.
 */

var React = require('react');

var HtmlHead = React.createClass({
  render: function () {
    return (
      <head>
        <meta charSet="UTF-8" />
        <title>{this.props.title}</title>
        <meta name="author" content="T.Shoji" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />

        {/* styles */}
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossOrigin="anonymous" />
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossOrigin="anonymous" />
        {this.props.cssFilePath ? <link type="text/css" rel="stylesheet" href={this.props.cssFilePath} /> : ''}
        {/* /styles */}

        {/* scripts */}
        <script charSet="UTF-8" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script charset="UTF-8" src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossOrigin="anonymous"></script>
        <script charSet="UTF-8" src="/socket.io/socket.io.js"></script>
        {this.props.jsFilePath ? <script charSet="UTF-8" src={this.props.jsFilePath}></script> : ''}
        {/* /scripts */}
      </head>
    );
  }
});

module.exports = HtmlHead;
