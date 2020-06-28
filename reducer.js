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