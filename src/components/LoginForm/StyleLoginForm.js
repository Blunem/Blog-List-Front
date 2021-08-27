import Stack  from '../Style/Stack';
import Cluster from '../Style/Cluster';
import styled from 'styled-components';

export const Form = styled(Stack('form'))`
    background-color:#FFF;
    border-radius: 1rem;
    padding:2rem;
`;

export const InputContainer = styled(Stack('div'))`
    label {
        font-weight: 450;
        color: #2F8BFD;
    }

    input { 

        padding:0.5rem;
        border:0;
        border-radius: 0.5rem;
        transition: box-shadow 0.2s;
        border:solid  0.1rem #CCC;

        &:: placeholder{
                color: #DEDEDE;
        }

        &:focus{
                border:solid  0.1rem #2F8BFD;
        }
    }
`;

export const SubmitButton = styled.button`
    padding:0.4rem 2rem 0.4rem 2rem;
    align-self: flex-end;   
    border:0;
    border-radius: 0.5rem;
    color: #FFF;

    font-size:1rem;
    background-color: ${props => props.can? '#2F8BFD' : '#AAA'};
    
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
            background-color: ${props => props.can? '#0072FF' : '#AAA'};
    }
    &:active{
            background-color: #47b636;   
    }
`;

export const BottomCluster = styled(Cluster('div'))`
    flex-wrap: nowrap;
    
`;