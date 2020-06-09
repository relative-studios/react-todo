import React, { Component } from 'react'
import store from "../../store/store";
import { updateStatus } from '../../store/actions/todoActions';
import { connect } from 'react-redux';

class Status extends Component {
  constructor(props){
    super(props);

    this.state = {
      status: props.status.title || '-',
      options: props.options,
      optionsActive: false,
      optionsBackground: props.status.background,
      id: props.id
    }
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  handleClickOutside = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.toggleOptions(false);
  }

  //Adds current id passed from TodoItem parent and status of current todoItem in passed into function and sends a put request to the database to update information
  updateTodoStatus = (title, background) => {
    // update status for active todo in global todos state
    const index = this.props.todos.findIndex(todo => todo._id === this.state.id);
    store.dispatch(updateStatus(index, title, background));

    const url = new URL('http://localhost:5000/api/todos/edit-status');
    // Adding parameters to url
    url.searchParams.append('id', this.state.id);
    url.searchParams.append('title', title);
    url.searchParams.append('background', background);

    fetch(url, {
      method: 'PUT'
    })
      .then(response => response)
      .catch(error => {
        console.log(error);
      });
  }

  toggleOptions = (option) => {
    this.setState({optionsActive: option});
  }

  setOption = (option) => {
    this.setState({status: option.title});
    this.setState({optionsBackground: option.background});
    this.setState({optionsActive: false});

    this.updateTodoStatus(option.title, option.background);
  }

  renderOptions = () => {
    let optionsArr = [];

    this.state.options.forEach(option => {
      optionsArr.push(<div className={`overlay status-option bg-${option.background}`} key={option.title} onClick={() => this.setOption(option)}>{option.title}</div>)
    });

    return optionsArr;
  }

  render() {
    return (
      <div className="position-relative h-100 status" ref={node => this.node = node}>
        <div onClick={e => this.toggleOptions(true)} className={`w-100 h-100 text-center status-overlay bg-${this.state.optionsBackground} ${this.state.optionsActive ? "hidden" : ""}`}>{ this.state.status }</div>
        <div className={`status-options ${this.state.optionsActive ? "" : "hidden"}`}>
          {this.renderOptions()}
        </div>
      </div>
    )
  }
  
}

// setting state for app
const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, {})(Status);
