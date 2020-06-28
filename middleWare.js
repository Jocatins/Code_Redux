const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const GET_CODE = 'GET_CODE'
const GET_TECH = 'GET_TECH'

function getCode() {
    return {
        type: GET_CODE,
        info: 'redux action'
    }
}
function getTech() {
    return {
        type: GET_TECH
    }
}

const initCodeState = {
    numOfCodes: 90000
}
const initTechState = {
    numOfTechs: 30
}
const codeReducer = (state = initCodeState, action) => {
    switch (action.type) {
        case GET_CODE: return {
            ...state,
            numOfCodes: state.numOfCodes + 300
        }
        default: return state
    }
}
const techReducer = (state = initTechState, action) => {
    switch (action.type) {

        case GET_TECH: return {
            ...state,
            numOfTechs: state.numOfTechs + 3
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    code: codeReducer,
    tech: techReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => { })
store.dispatch(getCode())
store.dispatch(getCode())
store.dispatch(getCode())
store.dispatch(getTech())
store.dispatch(getTech())
unsubscribe()