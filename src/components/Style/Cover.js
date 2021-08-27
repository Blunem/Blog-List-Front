import styled from 'styled-components'

const Cover = (element) => styled[element]`  
    display: flex;
    flex-direction: column;
    ${props => props.full? 'min-height: 100hv;' : null}
    padding: ${props => props.padding? props.padding : '0'};
    
    & > * {
        margin-top: ${props => props.margins? props.margins : '0'};
        margin-bottom: ${props => props.margins? props.margins : '0'};
    }

    & > .cover {
        margin-top: auto;
        margin-bottom: auto;
        
    }
    
    & > :first-child:not(.cover) {
        margin-top: 0;
    }
    
    & > :last-child:not(.cover) {
        margin-bottom: 0;
    }
    
` 
export default Cover
