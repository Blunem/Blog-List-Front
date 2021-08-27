import React from 'react';

const List = ({Data, Component, Support, Container, ...props}) => {
    return(
        <Container {...props}>
            {Data.map(element => <Component Instance = {element} Support = {Support} key = {element.id}/>)}
        </Container>
    )
}
export default List;