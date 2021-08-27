import Cluster  from '../../Style/Cluster';
import styled from 'styled-components';


export const BlogWrapper = styled(Cluster('div'))`
    
    background-color:#FFF;
    padding: 1rem 2rem 1rem 2rem;
    align-items:center;

    &:hover{
        background-color: #EEE;

    }

`;

export const FirstChild = styled(Cluster('div'))`
    flex-wrap: nowrap;
  
`;

export const LastChild = styled(Cluster('div'))`
   
  
`;

export const DeleteButton = styled.button`
    color: inherit;
    background-color:inherit;
    border:0;

    &:hover{
        color:red;
    }
`;