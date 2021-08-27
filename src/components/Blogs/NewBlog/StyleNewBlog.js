import styled from 'styled-components';
import Stack from '../../Style/Stack';
import Cluster from '../../Style/Cluster'

export const StackContainer = styled(Stack('div'))`
   
`;

export const TitleCluster = styled(Cluster('div'))`
    flex-wrap:nowrap;
    padding-right:0.5rem;
`;

export const ShowButton = styled.button`
    color: inherit;
    background-color:inherit;
    border:0;

`;