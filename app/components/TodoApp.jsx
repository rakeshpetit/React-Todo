var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk in the park'
        }, {
          id: 2,
          text: 'Play with Eashwar'
        }, {
          id: 3,
          text: 'Exercise daily'
        }, {
          id: 4,
          text: 'Job hunt'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
