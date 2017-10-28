import TodoConstant from '../constant/TodoConstant';

const TodoAction = {
  // 增加 todo
  addTodo(text) {
    return {
      type: TodoConstant.ADD_TODO,
      text
    }
  },
  // 完成或者撤销完成状态
  toggleComplete(index) {
    return {
      type: TodoConstant.TOGGLE_COMPLETE,
      index
    }
  },
  // 更改显示的选择样式
  showFilter(filter) {
    return {
      type: TodoConstant.SHOW_FILTER,
      filter
    }
  }
};

export default TodoAction;