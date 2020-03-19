import React, { useState } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';

function AddTodo() {
  // gives us access to dispatch actions
  const dispatch = useDispatch();

  // tracks value of input as a ref
  const inputValue = React.createRef();

  // sets initial state of todoValue
  const [todoValue, setTodoValue] = useState('');

  const updateTodo = () => {
    // sets state of todoValue to current value in inputValue
    setTodoValue(inputValue.current.value);
  }

  const handleAddTodo = () => {
    // build new todo object based on todoValue state
    const todo = {
      groupId: 1,
      id: Date.now(),
      title: todoValue,
      completed: false
    };

    // any todo should be at least 3 characters long
    if (todoValue.length > 3) {
      dispatch(addTodo(todo));
    }

    // resets state of todoValue to be blank
    setTodoValue('');
  }

  console.log(todoValue);

  // Render the component
  return (
    <div>
      <h3>Add Todo</h3>
      <Form>
        <InputGroup className="rounded-0 custom-form-group mb-3">
          <FormControl
            placeholder="Todo Description" 
            aria-label="Todo Description"
            ref={inputValue} type="text" onChange={updateTodo}
            value={todoValue}
          />
          <InputGroup.Append >
            <Button variant="outline-none" className={"btn rounded " + (todoValue.length > 3 ? 'btn-primary' : 'btn-outline-none')} onClick={handleAddTodo}>Add Todo</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  )
}

export default AddTodo;
