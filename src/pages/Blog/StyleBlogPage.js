import styled from 'styled-components';

import Stack from '../../components/Style/Stack';
import Cluster  from '../../components/Style/Cluster';
import { Button as StyledButton } from '../../components/Style/Buttons/Buttons'


export const Page = styled(Stack('div'))`
    
`
export const StackList = styled(Stack('div'))`
   padding:0rem 0.5rem 0rem 0.5rem;
`;

export const DataCluster = styled(Cluster('div'))`
    flex-wrap: nowrap;
    background-color: ${props => props.transparent? 'inherit': '#FFF'};
    padding: 0.5rem 1rem 0.5rem 1rem;
    
`;

export const Button = StyledButton
