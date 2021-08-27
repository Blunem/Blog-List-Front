
const initialState = ''

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'CLEAR_NOTIFICATION':
            return action.content
        case 'SET_NOTIFICATION':
            return action.content
        case 'CLEAR_STATE':
            return initialState
        default: return state
    }
}
export default reducer