import React from 'react'
import { Page,MainContainer,MajorContent,MinorContent} from './StyleColumnPage'


const ColumnPage = ({title, description, children}) => {
    return (
        <Page split = {1} >
            <MainContainer isRight minorSize ={'20rem'} gap ={'2rem'}>
                <MajorContent>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                </MajorContent>
                <MinorContent>
                    {children}
                </MinorContent>
            </MainContainer>
            <div></div>  
        </Page>
    )
}
export default ColumnPage
