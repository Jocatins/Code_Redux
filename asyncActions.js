const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initState = {
    loading: false,
    coders: [],
    error: ''
}

const FETCH_CODERS_REQUEST = 'FETCH_CODERS_REQUEST'
const FETCH_CODERS_SUCCESS = 'FETCH_CODERS_SUCCESS'
const FETCH_CODERS_FAILURE = 'FETCH_CODERS_FAILURE'

const fetchCodersRequest = () => {
    return {
        type: FETCH_CODERS_REQUEST
    }
}
const fetchCodersSuccess = coders => {
    return {
        type: FETCH_CODERS_SUCCESS,
        payload: coders
    }
}
const fetchCodersFailure = error => {
    return {
        type: FETCH_CODERS_FAILURE,
        payload: error
    }
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CODERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_CODERS_SUCCESS: return {
            loading: false,
            coders: action.payload,
            error: ''
        }
        case FETCH_CODERS_FAILURE: return {
            loading: false,
            coders: [],
            error: action.payload
        }
    }
}
const fetchCoders = () => {
    return function (dispatch) {
        dispatch(fetchCodersRequest())
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                const coders = response.data.map(coder => coder.id)
                dispatch(fetchCodersSuccess(coders))
            })
            .catch(error => {
                dispatch(fetchCodersFailure(error.message))

            })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchCoders)