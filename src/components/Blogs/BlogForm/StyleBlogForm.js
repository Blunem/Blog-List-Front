import styled from 'styled-components';

import Stack  from '../../Style/Stack';
import Cluster  from '../../Style/Cluster';
import { Button, IconButton } from '../../Style/Buttons/Buttons';


export const Form = styled(Stack('form'))`
    padding:0rem 0.5rem 0rem 0.5rem;
`;

export const InputCluster = styled(Cluster('div'))`
    flex-wrap: nowrap;
    background-color: #FFF;
    padding: 0.5rem 1rem 0.5rem 1rem;
`;

export const ButtonContainer = styled(Cluster('div'))`

   
`;

export const SubmitButton = styled(Button)`
    align-self:flex-end;
`;

export const ClearButton = styled(IconButton)`
`;

export const Input = styled.input`
    flex-grow: 1; 
    
    padding: .5rem 2rem .5rem 1rem;
    border: 0;

    color: #666;
    font-size:.8rem;
    font-weight:800;

    &:focus, :hover{
        background-color:#EEE;
        border-radius:1rem;
    }

`;

export const InputContainer = styled(Cluster('div'))`
    flex-wrap: nowrap;
    flex-grow: 1; 
`;