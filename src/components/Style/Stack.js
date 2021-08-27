import styled, { css } from 'styled-components'

const split = css`
    &:only-child {
        height: 100%;
    }

    & > :nth-child(${props => props.split}) {
        margin-bottom: auto;
    }
`

const Stack = (element) => styled[element]`  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > * {
        margin-top: 0;
        margin-bottom: 0;
    } 
    
    & > * + * {
        margin-top: ${props => (props.space? props.space : '1.5rem')}
    }

    ${props => props.split? split : null }
` 
export default Stack
