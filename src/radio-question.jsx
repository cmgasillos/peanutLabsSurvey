var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      answer: null
    }
  },
  _displayChoices: function(){
    var arr = [];
    var options = this.props.options.split(",");
    for(var i = 0; i < options.length; i++){
      arr.push(<div><input type="radio" name={this.props.num} value={options[i]} onChange={this._handleAnswer}/>{options[i]} <br/></div>);
    }
    return arr;
  },
  _handleAnswer: function(event){
    var answer = event.target.value;
    this.setState({
      answer: answer
    });
  },
  _validateAnswer: function(){
    if(!this.state.answer){
      return null;
    }
    this.props.showAnswer(this.props.num);
    if(this.props.show){

    }
    return this.state.answer;
  },
  render: function(){
    return (
      <div>
        <span>{this.props.num + 1 + ". "}</span>{this.props.question}
        <div >
          <form>
            {this._displayChoices()}
          </form>
        </div>
        <div >
          answer: {this._validateAnswer()}
        </div>
      </div>
    );
  }
});