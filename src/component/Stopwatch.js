import React, { Component } from 'react';
import Button from './Button';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
            running: false
        }

        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    tick() {
        this.setState({
            timer: this.state.timer + 1
        })
    }

    handleStart() {
        if(!this.state.running) {
            // set running
            this.setState({ running: true })

            // start timer
            this.timer = setInterval(() => { this.tick() }, 1000);
        }
    }

    handleStop() {
        // change running state
        this.setState({ running: false });

        // clear time
        clearInterval(this.timer);
    }

    handleReset() {
        // 
        this.setState({ running: false, timer: 0 });
        clearInterval(this.timer);
    }

    render() {
        return <div>
            <h1>{ this.state.timer }</h1>
            <Button text="start" onClick={ this.handleStart }/>
            {
                (this.state.running) 
                ? <Button text="stop" onClick={ this.handleStop }/> 
                : <Button text="reset" onClick={ this.handleReset }/>
            }
        </div>
    }
}

export default Stopwatch;