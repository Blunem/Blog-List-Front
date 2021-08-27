import React from 'react';

import User from '../User/User';
import BlockList from '../../List/BlockList';


const UserList = ({Title, data}) => {

  return(
    <>
      <BlockList title ={Title} data={data} component ={User}/>
    </>
  )
}
export default UserList;