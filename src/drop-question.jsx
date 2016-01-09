var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      open: false
    };
  },
  _handleClick: function(){
    this.setState({
      open: !this.state.open
    })
  },
  _itemClicked: function(item){
    this.setState({
      open: false,
      itemTitle: item
    });
  },
  _validateAnswer: function(){
    if(!this.state.itemTitle){
      return null;
    }
    this.props.showAnswer(this.props.num);
    return this.state.itemTitle;
  },
  render: function(){
    //for the className we're passing in a button class from bootstrap into Button
    //it is good practice to pass in the index as this.props.key to the child when dealing with arrays.
    return (
      <div>
        <span>{this.props.num + 1 + ". "}</span>{this.props.question}
        <div className="dropdown main">
          <Button 
            handleClick={this._handleClick} 
            className="btn-default" 
            title={this.state.itemTitle || "Choose an option"} 
            subTitleClassName="caret" />
          <ul className={"dropdown-menu" + (this.state.open ? " show" : "")}>
            {this.props.options.split(",").map(function(item, i){
              return <ListItem 
                      key={i} 
                      item={item} 
                      itemClicked={this._itemClicked} 
                      className={this.state.itemTitle === item ? "active" : ""} />
            }.bind(this))}
          </ul>
        </div>
        <br />
        answer: {this._validateAnswer()}
      </div>
    );
  }
});