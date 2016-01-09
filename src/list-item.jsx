var React = require('react');

module.exports = React.createClass({
  _handleClick: function(){
    this.props.itemClicked(this.props.item);
  },
  render: function(){
    return (
      <li className={this.props.className}>
        <a onClick={this._handleClick}>{this.props.item}</a>
      </li>
    );
  }
});