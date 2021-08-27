const initialState =''

const authReducer = (state = initialState, action) => {

    switch(action.type){
      case 'LOG_IN':
        return action.data
      case 'CLEAR_STATE':
          return initialState
      default: return state
    }
  }
  
  export default authReducer