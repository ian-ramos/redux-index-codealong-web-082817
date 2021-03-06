import React, { Component } from 'react';

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} /> /* code changed */
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
