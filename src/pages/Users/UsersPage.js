import React from  'react'
import { useSelector } from 'react-redux';
import UserList from '../../components/Users/UserList/UserList';

const UsersPage = () => {

    const users = useSelector(store => store.users)
    
    return(
        <>
          <UserList Title = {'Users'} data ={users} />
        </>
    )
}

export default UsersPage