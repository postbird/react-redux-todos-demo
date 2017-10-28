import React, { Component } from 'react';

import logoSrc from './images/logo.svg'

// import Hello from './components/Hello';

import TodoApp from './container/TodoApp';

import store from './reducer/TodoReducer';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoStyle: {
        width: '100px'
      },
      divStyle: {
        textAlign: "center"
      },
    }
  }
  render() {
    return (
      <div style={ this.state.divStyle }>
        <h1><img src={ logoSrc } alt="logo" style={ this.state.logoStyle } /></h1>
        <hr />
        <Provider store={ store }>
          <TodoApp></TodoApp>
        </Provider>
      </div>
    )
  }
}
export default App;