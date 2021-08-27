import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import { CenterContainer, Page, StackContainer } from './StyleFrontPage';

const FrontPage = ({user,actions,children}) => {

    return(
        <Page>
            <Navbar user = {user} handleLogout = {actions.logout} />
            <CenterContainer gutter={'2rem'} maxwidth={'40rem'}>
                <StackContainer>
                    {children}
                </StackContainer>
            </CenterContainer>
        </Page>
    )
}
export default FrontPage