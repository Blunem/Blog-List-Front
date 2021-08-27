import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { clearError } from '../../reducers/error/errorActions'
import { logUserOut } from '../../reducers/auth/authActions';
import timer from '../../utils/timer';
import * as Container from './StyleError';

const Error = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const error = useSelector(state => state.error)
    
    const actions = {
        first: () => {},
        last: () => { 
            if(error.status.includes('invalid token') || error.status.includes('expired token'))
                dispatch(logUserOut())
            dispatch(clearError())
            history.push('/')
        }
    }

    timer(actions,4000)

    return(
            <Container.Box autocentering>
                <Container.Elements space={'0.5rem'}>
                    <h2>{error.code}</h2>
                    <h3>{error.status}</h3>
                    <h3>don't worry, soon you will be redirected to home screen </h3>
                </Container.Elements>
            </Container.Box>
    )
}
export default Error;