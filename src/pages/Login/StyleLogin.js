import styled from 'styled-components';
import Stack from '../../components/Style/Stack';
import Sidebar from '../../components/Style/Sidebar';
import Cover from '../../components/Style/Cover';

export const Page = styled(Stack('div'))`
    min-height: 100vh;
    background-color: #f0f2f5;
`
export const MainContainer = styled(Sidebar('div'))`
    padding: 4rem 4rem 0rem 4rem;
`;
export const MajorContent= styled(Stack('div'))`
    justify-content: center;
    h1 {
        color: #2F8BFD;
    }
`;
export const MinorContent= styled(Stack('div'))`
 
  margin-top:2rem;
  
`;

export const Footer = styled.div`
   min-height: 4rem;
`;

export const CoverContainer = Cover('div');

