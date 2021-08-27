import styled from 'styled-components'


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


export const Button = styled.button`

    padding: 0.4rem 1rem 0.4rem 1rem;
    color: #EFEFEF;
    background-color: #185ADB;
    border:0rem;
    border-radius:2rem;
    font-weight: 800;
    transition: all 0.2s;
    cursor: pointer;

    &:hover{
        color:#0A1931;
        background-color: #FFC947;
    }

    &:active{
        background-color: #0A1931;
        color: #EFEFEF;   
    }
`

export const IconButton = styled.button`
    color: inherit;
    background-color:inherit;
    border:0;

    &:hover{
        color:#FFC947;
    }
`;
