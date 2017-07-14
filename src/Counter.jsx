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
                <NumberDisplay
                    numberToDisplay={this.state.nb}
                    textColor="red"
                />
                <button onClick={ ( ) => this.increment() }>
                    click me
                </button>
            </div>
        )
    }
}


function NumberDisplay(props) {
    const style = {
        color: props.textColor,
        fontSize: '60px'
    }
    return (
        <h1 style={style}>{ props.numberToDisplay }</h1>
    )
}