
import Cluster  from '../../../components/Style/Cluster';
import {Button}  from '../../../components/Style/Buttons/Buttons'
import styled from 'styled-components';

export const SubmitButton = Button;

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

export const Form = styled(Cluster('form'))`
    flex-grow: 1; 
    flex-wrap: nowrap;
`;


