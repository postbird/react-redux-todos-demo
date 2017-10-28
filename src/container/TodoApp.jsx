import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoConstant from '../constant/TodoConstant';
import TodoAction from '../action/TodoAction';

import TodoHeader from '../components/todo/TodoHeader';
import TodoList from '../components/todo/TodoList';
import TodoFooter from '../components/todo/TodoFooter';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }
  // 实际上处理增加todo的方法 这个方法通过props分发到了Todoheader
  addTodoHandle(text) {
    this.props.dispatch(TodoAction.addTodo(text));
  }
  // 处理完成与取消完成状态的todo 这个方法通过props分发到了TodoList再分发到了TodoItem
  toggleComplete(index) {
    this.props.dispatch(TodoAction.toggleComplete(index));
  }
  // 处理显示 通过 props分发到了TodoFooter
  showFilter(filter) {
    this.props.dispatch(TodoAction.showFilter(filter));
  }
  render() {
    return (
      <div style={ { width: 600, margin: '0 auto' } }>
        <TodoHeader addTodo={ this.addTodoHandle.bind(this) }></TodoHeader>
        {/* todos 通过props分发到了 TodoList */}
        <TodoList todos={ this.props.todos } toggleComplete={ this.toggleComplete.bind(this) }></TodoList>
        {/* 分发到TodoFooter的除了 filter 之外 还有 TodoConstant 常量对象 */}
        <TodoFooter filter={ this.props.filter } showFilter={ this.showFilter.bind(this) } TodoConstant={ TodoConstant }></TodoFooter>
      </div>
    );
  }
}
// 控制显示的列表
// 触发之后，state更新，因此todos的状态是更新的，但是在显示的过程中，需要根据filter去显示
const filterTodos = (todos, filter) => {
  switch (filter) {
    case TodoConstant.FILTER.SHOW_ACTIVE:
      return todos.filter((item) => {
        return !item.completed;
      });
    case TodoConstant.FILTER.SHOW_COMPLETED:
      return todos.filter((item) => {
        return item.completed;
      });
    default:
      return todos;
  }
}
// 用于connect进行state的注入
const getList = (state) => {
  console.log(state.filter);
  return {
    todos: filterTodos(state.todos, state.filter),
    filter: state.filter
  };
};
export default connect(getList)(TodoApp);