import React, { Component } from 'react'
import store from "../../store/store";
import { updateDuedate } from '../../store/actions/todoActions';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';

class Duedate extends Component {
  constructor(props){
    super(props);

    this.state = {
      duedate: props.duedate,
      id: props.id
    }
  }

  updateTodoDuedate = duedate => {
    const index = this.props.todos.findIndex(todo => todo._id === this.state.id);
    store.dispatch(updateDuedate(index, duedate));
  
    const url = new URL('http://localhost:5000/api/todos/edit-duedate');
    // Adding parameters to url
    url.searchParams.append('id', this.state.id);
    url.searchParams.append('duedate', duedate);
  
    fetch(url, {
      method: 'PUT'
    })
      .then(response => response)
      .catch(error => {
        console.log(error);
      });
  }

  handleUpdateDuedate = duedate => {
    this.setState({duedate});
  }

  render() {
    let duedateDate;
    
    // Handling in case there is no duedate assigned
    if (this.state.duedate === "") {
      duedateDate="";
    } else {
      duedateDate=new Date(this.state.duedate);
    }

    return (
      <DatePicker
        value={duedateDate}
        clearIcon={null}
        calendarIcon={null}
        className="date-picker"
        onChange={date => { this.handleUpdateDuedate(date);  this.updateTodoDuedate(date)}}
      /> 
    )
  }



}

// setting state for app
const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, {})(Duedate);