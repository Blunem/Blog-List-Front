import styled, { css } from 'styled-components'


const mainContent = css`
    flex-basis: 0;
    flex-grow: 999;
    min-width: ${props => props.minwidth? props.minwidht : '50%'};
`
const minorContent = css`
    ${props => props.minorSize? `flex-basis: ${props.minorSize};` : null} 
    flex-grow: 1;

`

const onLeft = css`
    & > :first-child {
        ${minorContent} 
    }

    & > :last-child {
        ${mainContent}
    }
`

const onRight = css`
    & > :first-child {
        ${mainContent}
    }

    & > :last-child {
        ${minorContent}
    }
`

const Sidebar = (element) => styled[element]`  
    
    display: flex;
    flex-wrap: wrap;
    ${props => props.gap? `gap: ${props.gap};` : null } 
    ${props => props.isRight? onRight : onLeft }
` 
export default Sidebar

