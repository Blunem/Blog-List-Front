import styled from 'styled-components';
import { Link } from "react-router-dom";

import Cluster  from '../Style/Cluster';
import { Button } from '../Style/Buttons/Buttons';


export const NavbarContainer = styled(Cluster('div'))`
    padding-left: 4rem;
    padding-bottom: .5rem;
    padding-top: .5rem;
    background-color: #0A1931;
    
`;

export const NavbarItems = styled(Cluster('div'))`
    padding-right: 4rem;
`;

export const NavbarLink = styled(Link)`
    text-decoration: none;
    color:#EFEFEF;
    border:0rem;
    border-radius:2rem;
    font-weight: 500;
    transition: all 0.2s;
    &:hover {
        color:#FFC947;
    }
`;

export const LogoutButton = Button