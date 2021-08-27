
const initialState = {
    code: 0,
    status: ''
}

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'CLEAR_ERROR':
            return initialState
        case 'SET_ERROR':
            return action.payload
        case 'CLEAR_STATE':
            return initialState
        default: return state
    }
}
export default reducer