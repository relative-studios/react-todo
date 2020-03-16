import React, { Component } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';

/* eslint-disable no-unused-expressions */
class AddTodo extends Component {
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
    
    // build new todo object
    const todo = {
      userId: 1,
      title: this.state.todoValue,
      completed: false,
      id: Date.now()
    }

    console.log(todo);

    this.props.addTodo(todo);
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

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(AddTodo);
