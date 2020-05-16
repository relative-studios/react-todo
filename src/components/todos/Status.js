import React, { Component } from 'react'

class Status extends Component {
  constructor(props){
    super(props);
    this.updateStatus = props.updateStatus.bind(this);

    this.state = {
      status: props.status,
      options: props.options,
      optionsActive: false,
      optionsBackground: 'light'
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.status !== this.state.status) {
  //     this.updateStatus(this.state.status);
  //   }
  //   console.log("Status did update");
  // }
  
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
    const {updateStatus} = this.props;
    
    // if (this.state.optionsActive === false && this.state.status !== "-") {
    //   updateStatus(this.state.status);
    // }

    //onClick={() => updateStatus(this.state.status)} 

    return (
      <div className="position-relative h-100 status">
        <div onClick={this.toggleOptions} className={`w-100 h-100 text-center status-overlay bg-${this.state.optionsBackground} ${this.state.optionsActive ? "hidden" : ""}`}>{ this.state.status }</div>
        <div onClick={() => updateStatus(this.state.status)} className={`status-options ${this.state.optionsActive ? "" : "hidden"}`} onChange={() => this.props.updateStatus(this.state.status)}>
          {this.renderOptions()}
        </div>
      </div>
    )
  }
  
}

export default Status;
