import styled, { css } from 'styled-components'


const intrinsicCentering= css`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Center = (element) => styled[element]`  

    ${props => props.autocentering? intrinsicCentering : null}

    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    ${props => props.maxwidth? `max-width: ${props.maxwidth};` : null}

    ${props => props.gutter? `padding-left: ${props.gutter};` : null}
    ${props => props.gutter? `padding-right: ${props.gutter};` : null}
    
` 
export default Center
