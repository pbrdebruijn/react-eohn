import React, { Component } from 'react';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // create a timer that runs tick() every second
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // cleanup
    clearInterval(this.timer);   
  }

  tick() {
    // update time in state
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (<span>{ this.state.date.toLocaleTimeString() }</span>);
  }
}

export default Time;
