var React = require('react');

module.exports = React.createClass({
  render: function(){
    //a className was passed down from the parent element and we will add it to the className
    return (
      <button onClick={this.props.handleClick} className={"btn " + this.props.className} type="button">
        {this.props.title} <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
      </button>
    )
  }
});