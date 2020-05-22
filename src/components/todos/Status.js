import React, { Component } from 'react'

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

  //Adds current id passed from TodoItem parent and status of current todoItem in passed into function and sends a put request to the database to update information
  updateTodoStatus = (title, background) => {
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

  toggleOptions = () => {
    this.setState({optionsActive: true});
  }

  setOption = (option) => {
    this.setState({status: option.title});
    this.setState({optionsBackground: option.background});
    this.setState({optionsActive: false});

    this.updateTodoStatus(option.title, option.background);
    this.props.updateStatus(this.state.id, option.title, option.background)
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
      <div className="position-relative h-100 status">
        <div onClick={this.toggleOptions} className={`w-100 h-100 text-center status-overlay bg-${this.state.optionsBackground} ${this.state.optionsActive ? "hidden" : ""}`}>{ this.state.status }</div>
        <div className={`status-options ${this.state.optionsActive ? "" : "hidden"}`}>
          {this.renderOptions()}
        </div>
      </div>
    )
  }
  
}

export default Status;
