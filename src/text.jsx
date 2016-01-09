var React = require('react');

module.exports = React.createClass({
  _addQuestion: function(){
    var components = {
      question: this.props.question,
      type: this.props.type,
    }
    this.props.add(components);
    this.props.clearOutHeader();
  },
  render: function(){
    return (
      <div>
        <button type="button" className="btn btn-default" onClick={this._addQuestion}>Add</button>
        <hr />
      </div>
    );
  }
});