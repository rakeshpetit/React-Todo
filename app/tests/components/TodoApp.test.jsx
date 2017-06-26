var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp',() => {

  it('should exist',()=> {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todo list on handleAddTodo',()=> {
    var todoText = 'text item';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed when handleToggle is called',()=> {
    var todoData = {
        id: 10,
        text: 'text item',
        completed: false,
        createdAt: 0,
        completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(10);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove completed date when completed is unchecked',()=> {
    var todoData = {
        id: 10,
        text: 'text item',
        completed: true,
        createdAt: 0,
        completedAt: 1008
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(10);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
