let timeoutId = ''

export const setNotification = (notification) => {
    return {
        type: 'SET_NOTIFICATION',
        content: notification
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
        content: ''
    }
}

export const createNotification = (notification, time=3) => {
    return async (dispatch) => { 
        if(timeoutId)
            clearTimeout(timeoutId)

        dispatch(setNotification(notification))

        timeoutId = setTimeout(() => { 
            timeoutId = ''
            dispatch(clearNotification()) 
        }, time*1000)
    }
}