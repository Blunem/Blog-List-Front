import React from 'react';

import Block from '../Block/Block';
import List from './List'
import {StackList} from './SyleBlockList'


const BlockList = ({title, component, data, }) => {

  return(
    <Block Title = {title}>
      <List Data = {data} Component = {component} Container = {StackList} space={'0.4rem'}/>
    </Block>
  )
}
export default BlockList