import { Map } from 'immutable';

const INCREMENT_VALUE = 'INCREMENT_VALUE'

export function increment() {
    return { type: INCREMENT_VALUE }
}

export default function reducer(state = Map(), action) {
    switch (action.type) {
        case INCREMENT_VALUE: {
            const counterValue = state.get('counterValue') || 0;
            return state.merge({
                counterValue: counterValue + 1
            })
        }
    }
    return state;
}