import React, { Component } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

/* eslint-disable no-unused-expressions */
export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
    this.state = {
      todoValue: ''
    }

    this.updateTodo = this.updateTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  updateTodo() {
    // binding input value to state.todoValue
    this.setState({todoValue: this.inputValue.current.value});
  }

  addTodo(e) {
    // stop page from reloading after submit
    e.preventDefault();
    console.log(this.state.todoValue);
    
    // build new todo object
    const todo = {
      userId: 1,
      title: this.state.todoValue,
      completed: false
    }

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(res =>res.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h3>Add Todo</h3>
        <Form onSubmit={this.addTodo}>
          <InputGroup className="rounded-0 border-bottom border-secondary custom-form-group mb-3">
            <FormControl
              placeholder="Todo Description" 
              aria-label="Todo Description"
              ref={this.inputValue} type="text" onChange={this.updateTodo}
              value={this.state.updateTodo}
            />
            <InputGroup.Append >
              <Button variant="outline-none" type="submit">Add Todo</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
    )
  }
}
