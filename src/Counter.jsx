import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            nb: 0,
        }
    }

    increment() {
        this.setState({
            nb: this.state.nb + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.nb }</h1>
                <button onClick={ ( ) => this.increment() }>
                    click me
                </button>
            </div>
        )
    }
}