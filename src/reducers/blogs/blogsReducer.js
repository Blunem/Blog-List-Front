const initialState = []
const reducer = (state = initialState, action) => {
    let id = ''

    if(!state)
      return []
    switch(action.type){
      case 'SET_BLOGS':
        return action.payload
      case 'NEW_BLOG':
        return state.concat(action.payload)
      case 'DELETE_BLOG':
        id = action.payload.id
        return  state.filter(blog => blog.id !== id)
      case 'LIKE':
        id = action.payload.id
        return state.map(a => a.id!==id? a : {...a, likes: action.payload.likes})
      case 'COMMENT':
        id = action.payload.blog
        const blog = state.find( element => element.id === id)
        const comments = blog.comments.concat(action.payload)
        return state.map(a => a.id!==id? a : {...blog, comments})
      case 'CLEAR_STATE':
          return initialState
      default: return state
    }
  }
  
  export default reducer