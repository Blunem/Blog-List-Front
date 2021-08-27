import React from 'react';

import { Link } from "react-router-dom";
import {  BsFillPersonLinesFill} from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { BlogWrapper, FirstChild, LastChild } from './StyleUser';


const User = ({ Instance } ) => {
    const User = Instance
    return(
        
        <BlogWrapper gap={'0.5rem'} justify={'space-between'}>
            <FirstChild gap={'0.4rem'}>
                <BsFillPersonLinesFill/>
                <Link to={`/users/${User.id}`}><h6>{User.name} alias {User.username}</h6></Link>
            </FirstChild>
            <LastChild gap = {'0.8rem'}>
                <BiNews/>
                <h6>{User.blogs.length}</h6>
            </LastChild>
        </BlogWrapper>
    )
}   

export default User;