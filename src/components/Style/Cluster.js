import styled from 'styled-components'



const Cluster = (element) => styled[element]`  
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.gap? props.gap : '1rem'};
    justify-content:  ${props => props.justify? props.justify : 'flex-start'};
    align-items: ${props => props.align? props.align : 'center'};
` 
export default Cluster
