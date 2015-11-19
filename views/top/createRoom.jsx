/**
 * CreateRoom Content
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
      title: 'ThermiteDraw - CreateRoom',
      cssFile: '/css/CreateRoom.css',
      jsFile: '/js/dist/createRoom.js'
    };
  },
  render: function() {
    return (
      <html lang="ja">
      <HtmlHead title={this.props.title} cssFilePath={this.props.cssFile} jsFilePath={this.props.jsFile}></HtmlHead>
      <body>
        {/* container */}
        <div className="container-fluid">
          <h1>Setting password?</h1>
          <div className="buttons">
            <ReactBS.Button className="btnYes" bsStyle="success">Yes</ReactBS.Button>
            <ReactBS.Button className="btnNo" bsStyle="success">No</ReactBS.Button>
          </div>
        </div>
        {/* /container */}
        {/* modal window */}
        <div className="modal fade" id="modalSetPwd" tabIndex="-1" role="dialog" aria-labelledby="lblModalSetPwd">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="lblModalSetPwd">Please enter the password</h4>
              </div>
              <div className="modal-body">
              <form>
                <ReactBS.Input type="password" label="Password" />
              </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" id="btnSetPwd">OK</button>
              </div>
            </div>
          </div>
        </div>
        {/* /modal window */}
      </body>
      </html>
    );
  }
});

module.exports = Content;
