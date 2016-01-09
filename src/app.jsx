var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header');
var RadioQuestion = require('./radio-question');
var CheckQuestion = require('./check-question');
var DropQuestion = require('./drop-question');
var TextQuestion = require('./text-question');

var Survey = React.createClass({
  getInitialState: function(){
    return {
      track: [],
      survey: false,
      finish: false,
      show: false,
      done: false
    };
  },
  getDefaultProps: function(){
    return {
      count: []
    };
  },
  _add: function(result){
    this.state.track.push(result);
    this.setState({
      survey: true
    });
  },
  _handleFinishSurvey: function(){
    this.questions = [];
    for(var i = 0; i < this.state.track.length; i++){
      this.props.count.push(null);
      var item = this.state.track[i];
      item.num = i;
      if(i === this.state.track.length-1){
        this.setState({
          show: true
        });
      }
      if(this.state.track[i].type === "radio"){
        this.questions.push(<div><RadioQuestion key={i} {...this.state.track[i]} count={this.props.count} showAnswer={this._showAnswer} /><br /></div>);
      }
      else if(this.state.track[i].type === "check"){
        this.questions.push(<div><CheckQuestion key={i} {...this.state.track[i]} count={this.props.count} showAnswer={this._showAnswer} /><br /></div>);
      }
      else if(this.state.track[i].type === "drop"){
        this.questions.push(<div><DropQuestion key={i} {...this.state.track[i]} count={this.props.count} showAnswer={this._showAnswer} /><br /></div>);
      }
      else if(this.state.track[i].type === "text"){
        this.questions.push(<div><TextQuestion key={i} {...this.state.track[i]} count={this.props.count} showAnswer={this._showAnswer} /><br /></div>);
      }
    }
    this.setState({
      finish: true
    });
  },
  _displayQuestions: function(){
    if(this.state.finish){
      return this.questions;
    }
    return null;
  },
  _showAnswer: function(result, check){
    if(typeof result === "number" && check !== false){
      this.props.count[result] = true;
    }
    if(check === false){
      this.props.count[result] = null;
    }
    if(this.props.count.indexOf(null) < 0){
      console.log(this.props.count)
    }
  },
  render: function() {
    return (
      <div className="row panel panel-default">
        <div className={"col-md-8 col-md-offset-2" + (!this.state.finish ? "" : " hide")}>
          <h2 className="text-center">Create Survey</h2>
          <Header add={this._add} />
          <div className={(this.state.survey ? "visible" : "hide")}>
            <button type="button" className="btn btn-default finishSurvey" onClick={this._handleFinishSurvey}>Finish Creating Survey</button>
          </div>
        </div>
        <div className={"col-md-8 col-md-offset-2" + (this.state.finish ? "" : " hide")}>
          {this._displayQuestions()}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Survey />, document.getElementById('content'));