var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      answer: '',
      value: ''
    }
  },
  _handleAnswerChange: function(event){
    this.setState({
      value: event.target.value
    });
  },
  _handleSubmitAnswer: function(){
    var answer = this.state.value
    this.setState({
      answer: answer,
      value: ''
    });
  },
  _validateAnswer: function(){
    if(!this.state.answer){
      return null;
    }
    this.props.showAnswer(this.props.num);
    return this.state.answer;
  },
  render: function(){
    return (
      <div>
        <span>{this.props.num + 1 + ". "}</span>{this.props.question}
        <br />
        <input size="50" type="text" value={this.state.value} onChange={this._handleAnswerChange} />
        <button className="btn btn-default" type="button" onClick={this._handleSubmitAnswer}>Submit Text Answer</button>
        <br />
        answer: {this._validateAnswer()}
      </div>
    )
  }
});