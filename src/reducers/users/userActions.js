import userServices from "../../services/userServices"

const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        try{
            const users = await userServices.getAll()
            dispatch(setUsers(users))
        }catch(e){
            console.log(e.response)
        }
    }
}
