const redux = require('redux')
const createStore = redux.createStore

const GET_CODE = 'GET_CODE'
const GET_TECH = 'GET_TECH'

function getCode() {
    return {
        type: GET_CODE,
        info: 'first redux action'
    }
}
function getTech() {
    return {
        type: GET_TECH
    }
}
const initState = {
    numOfCodes: 3000,
    numOfTechs: 30
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CODE: return {
            ...state,
            numOfCodes: state.numOfCodes + 300
        }
        case GET_TECH: return {
            ...state,
            numOfTechs: state.numOfTechs + 3
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
store.dispatch(getTech())
store.dispatch(getTech())
unsubscribe()