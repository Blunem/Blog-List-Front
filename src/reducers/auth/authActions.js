
import blogServices from "../../services/blogServices"

export const login = (authData) => {
  return{
    type: 'LOG_IN',
    data: authData
  }
}

const logout = () => {
  return{
    type: 'CLEAR_STATE',
    data: ''
  }
}



// export const loginUser = (userData) => {
//     return async (dispatch) => {
//       try{
//         const authData= await loginServices.login(userData)
//         localStorage.setItem('loggedUser', JSON.stringify(authData))
//         dispatch(login(authData))
//         dispatch(createNotification('Successfully logged-in', 4))
//       }catch(e){
//         const errorInfo = e.response.data.error
//         dispatch(createNotification(errorInfo? `Error: ${errorInfo}` : 'Error: Offline', 2))
//       }
//     }
//   }

// export const loginUser = (userData) => {
//     return async (dispatch) => {
//       try{
//         const authData= await loginServices.login(userData)
//         localStorage.setItem('loggedUser', JSON.stringify(authData))
//         dispatch(login(authData))
//         dispatch(createNotification('Successfully logged-in', 4))
//       }catch(e){
//         const errorInfo = e.response.data.error
//         dispatch(createNotification(errorInfo? `Error: ${errorInfo}` : 'Error: Offline', 2))
//       }
//     }
//   }

export const loginUser = (userData) => {
  return async (dispatch) => {
    try{
        blogServices.setToken(userData.token)
        localStorage.setItem('authUser', JSON.stringify(userData))
        dispatch(login(userData))
    }catch(e){
      const errorInfo = e.response.data.error
      console.log(errorInfo)
    }
  }
}

export const restoreUser = (authData) => {
  blogServices.setToken(authData.token)
  return login(authData)
}

export const logUserOut = () => {
    localStorage.clear()
    blogServices.setToken('')
    return logout()
  }