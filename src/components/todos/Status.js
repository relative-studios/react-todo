import React, { Component } from 'react'

class Status extends Component {
  constructor(props){
    super(props);

    this.state = {
      status: props.status.title,
      options: props.options,
      optionsActive: false,
      optionsBackground: props.status.background
    }
  }

  toggleOptions = () => {
    this.setState({optionsActive: true});
  }

  setOption = (option) => {
    this.setState({status: option.title});
    this.setState({optionsBackground: option.background});
    this.setState({optionsActive: false});
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
