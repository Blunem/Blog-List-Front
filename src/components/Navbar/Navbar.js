import React from 'react';
import { LogoutButton, NavbarContainer, NavbarItems, NavbarLink } from './StyledNavbar';
import { BsFillHouseDoorFill } from "react-icons/bs";

const Navbar = ({user, handleLogout}) => {
    return(
        <NavbarContainer justify = { 'space-between' } align = { 'center' } >
            <NavbarLink to ={'/'}><BsFillHouseDoorFill/> {user} </NavbarLink>
            <NavbarItems>
                <NavbarLink to ={'/users'}>Users</NavbarLink>
                <NavbarLink to ='/blogs'>Blogs</NavbarLink>
                <LogoutButton onClick = { handleLogout }> Logout </LogoutButton>
            </NavbarItems>
        </NavbarContainer>
    )
}
export default Navbar

