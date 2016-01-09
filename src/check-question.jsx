var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      answer: []
    }
  },
  _displayChoices: function(){
    var arr = [];
    var options = this.props.options.split(",");
    for(var i = 0; i < options.length; i++){
      arr.push(<div><input type="checkbox" name={this.props.num} value={options[i]} onChange={this._handleAnswer}/>{options[i]} <br/></div>);
    }
    return arr;
  },
  _handleAnswer: function(event){
    if(event.target.checked && this.state.answer.indexOf(event.target.value) < 0){
      this.state.answer.push(event.target.value);
    }
    if(!event.target.checked && this.state.answer.indexOf(event.target.value) > -1){
      this.state.answer.splice(this.state.answer.indexOf(event.target.value), 1);
    }
    this.setState({
      answer: this.state.answer
    });
  },
  _validateAnswer: function(){
    if(!this.state.answer.length){
      this.props.showAnswer(this.props.num, false);
      return null;
    }
    this.props.showAnswer(this.props.num);
    return this.state.answer;
  },
  render: function(){
    return (
      <div>
        <span>{this.props.num + ". "}</span>{this.props.question}
        <form>
          {this._displayChoices()}
        </form>
        answer: {(this._validateAnswer() ? this._validateAnswer().join(",") : null)}
      </div>
    );
  }
});