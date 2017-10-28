import TodoConstant from '../constant/TodoConstant';

import { createStore, combineReducers } from 'redux';

// 初始化的 list
const list = [
  { text: 'AAAAAA', completed: false },
  { text: 'CCCCCC', completed: true },
  { text: 'DDDDDD', completed: false },
];
// 定义 todos的reducer
// 两部分操作 一部分处理ADD_TODO 另一部分处理 TOGGLE_COMPLETE
const todos = (todos = list, active) => {
  switch (active.type) {
    case TodoConstant.ADD_TODO:
      return [
        ...todos,
        {
          text: active.text,
          completed: false
        }
      ];
    case TodoConstant.TOGGLE_COMPLETE:
      return todos.map((item, index) => {
        if (index === active.index) {
          return Object.assign({}, item,item.completed = !item.completed);
        } else {
          return item;
        }
      });
    default:
      return todos;
  }
}
// 处理 filter 
const filter = (filter = TodoConstant.FILTER.SHOW_ALL, active) => {
  switch (active.type) {
    case TodoConstant.SHOW_FILTER:
      return active.filter;
    default:
      return filter;
  }
}
// 两个reducer进行组合
const reducer = combineReducers({
  todos: todos,
  filter: filter
});

const store = createStore(reducer);

export default store;