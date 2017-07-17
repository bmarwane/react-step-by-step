import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from './behaviors'

function Counter(props) {
    return (
        <div>
            <NumberDisplay
                numberToDisplay={props.numberToDisplay}
                textColor="red"
            />
            <button onClick={ ( ) => props.increment() }>
                click me
            </button>
        </div>
    )
}

function NumberDisplay(props) {
    const style = {
        color: props.textColor,
        fontSize: '60px'
    }
    return (
        <h1 style={style}>{ props.numberToDisplay || 0 }</h1>
    )
}


function mapStateToProps(state) {
    return {
        numberToDisplay: state.counter.get('counterValue'),

    }
}

const Connected = connect(mapStateToProps, actionCreators)(Counter);
export default Connected
