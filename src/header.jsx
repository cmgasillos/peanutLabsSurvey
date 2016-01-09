var React = require('React');
var Choices = require('./choices');
var Text = require('./text');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      question: '',
      type: null
    }
  },
  _handleType: function(event){
    this.setState({
      type: event.target.value
    });
    this.currentOption = event.target;
  },
  _handleQuestionChange: function(event){
    this.setState({
      question: event.target.value
    });
  },
  _clearOutHeader: function(){
    this.setState({
      question: '',
      type: null
    });
    this.currentOption.checked = false;
  },
  render: function(){
    return (
      <div>
        Question: <input size="50" type="text" value={this.state.question} onChange={this._handleQuestionChange} /><br /><br />
        Type of Question: <form>
          <input type="radio" name="question" value="radio" onChange={this._handleType} /> Radio Button
          <input type="radio" name="question" value="check" onChange={this._handleType} /> Check Box
          <input type="radio" name="question" value="drop" onChange={this._handleType} /> Drop Down
          <input type="radio" name="question" value="text" onChange={this._handleType} /> Text Input
        </form>
        <hr />
        <div className={(this.state.type && this.state.type !== "text" ? "visible" : " hide")}>
          <Choices add={this.props.add} clearOutHeader={this._clearOutHeader} question={this.state.question} type={this.state.type} />
        </div>
        <div className={(this.state.type === "text" ? "visible" : "hide")}>
          <Text add={this.props.add} clearOutHeader={this._clearOutHeader} question={this.state.question} type={this.state.type} />
        </div>
      </div>
    );
  }
});