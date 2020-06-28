const redux = require('redux')
const createStore = redux.createStore

const GET_CODE = 'GET_CODE'


function getCode() {
    return {
        type: GET_CODE,
        info: 'first redux action'
    }
}
const initState = {
    numOfCodes: 3000
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CODE: return {
            ...state,
            numOfCodes: state.numOfCodes + 300
        }
        default: return state
    }
}
const store = createStore(reducer)
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(getCode())
store.dispatch(getCode())
store.dispatch(getCode())
unsubscribe()