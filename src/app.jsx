var React = require('react');
var ReactDOM = require('react-dom');

var Survey = React.createClass({
  render: function() {
    return (
      <h1>Hello World</h1>
    );
  }
});

ReactDOM.render(<Survey />, document.getElementById('content'));