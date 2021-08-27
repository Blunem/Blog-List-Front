import React, {useState} from 'react';
import { StackContainer, TitleCluster, ShowButton } from './StyleBlock';
import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";

const Block = ({Title,children}) => {

    const [display, setDisplay] = useState(true);
    return(
        <StackContainer space = {'1rem'}>
            <TitleCluster justify = {'flex-start'}>
                <h2>{Title}</h2>
                <ShowButton onClick = {() => setDisplay(!display)} >{display? <BsFillCaretUpFill/> : <BsFillCaretDownFill/> }</ShowButton> 
            </TitleCluster>
                {display? children : null }
        </StackContainer>
    );
}
export default Block;