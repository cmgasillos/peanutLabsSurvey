var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      options: ''
    }
  },
  _addQuestion: function(){
    var components = {
      question: this.props.question,
      type: this.props.type,
      options: this.state.options
    }
    this.props.add(components);
    this.props.clearOutHeader();
    this.setState({
      options: ''
    });
  },
  _handleOptions: function(event){
    this.setState({
      options: event.target.value
    });
  },
  render: function(){
    return (
      <div>
        Please list out your choices: <input type="text" size="100" value={this.state.options} onChange={this._handleOptions} placeholder="Please use commas to separate: Apple, Orange"/><br />
        <button type="button" className="btn btn-default" onClick={this._addQuestion}>Add</button>
        <hr />
      </div>
    );
  }
});