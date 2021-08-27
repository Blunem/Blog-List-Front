
export const errorExtractor = (error) => {

    const errorCode = error.response.status
    const errorMessage = `${error.response.statusText}${error.response.data? `, server responded: "${error.response.data.error}"` : '' }`
    
    return { 
        code: errorCode, 
        status: errorMessage 
    }
}

export const setError = (error) => {
    return {
        type: 'SET_ERROR',
        payload: error
    }
}

export const clearError = () => {
    return {
        type: 'CLEAR_ERROR',
        payload: ''
    }
}
