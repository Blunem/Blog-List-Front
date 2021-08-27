import React from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'
import ColumnPage from '../../Layouts/ColumnPage/ColumnPage'

const Login =() => {
    return (
        <ColumnPage title={'Blog List App'} description = {'A simple app that allows users to share and rate their favorite blogs'}>
            <LoginForm/>
        </ColumnPage>
    )
}

export default Login