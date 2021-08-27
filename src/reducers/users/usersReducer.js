const initialState = []

let userId = ''
let blogId = ''

const userReducer = (state = initialState, action) => {

    switch(action.type){
      case 'SET_USERS':
        return action.payload
      case 'NEW_BLOG':
        userId = action.payload.user.id
        blogId = action.payload.id
        return state.map( user =>  user.id === userId? {...user, blogs: user.blogs.concat({ id: blogId }) } : user )
      case 'DELETE_BLOG':
        userId = action.payload.user
        blogId = action.payload.id
        return  state.map( user => user.id === userId? {...user, blogs: user.blogs.filter( blog => blog.id !== blogId) } : user )
      case 'CLEAR_USERS':
        return initialState
      case 'CLEAR_STATE':
          return initialState
      default: return state
    }
  }
  
  export default userReducer 
