
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from '../reducers/notification/notificationReducer'
import authReducer from '../reducers/auth/authReducer'
import usersReducer from '../reducers/users/usersReducer'
import blogReducer from '../reducers/blogs/blogsReducer'
import errorReducer from '../reducers/error/errorReducer'


const reducer = combineReducers({
        auth : authReducer,
        blogs : blogReducer,
        users : usersReducer,
        error : errorReducer,
        notification : notificationReducer,
    }
)
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store