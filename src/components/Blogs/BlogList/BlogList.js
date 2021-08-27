import React from 'react';

import Blog from '../Blog/Blog';
import BlockList from '../../List/BlockList';


const BlogList = ({Title, data}) => {

  return(
    <>
      <BlockList title ={Title} data={data} component ={Blog}/>
    </>
  )
}
export default BlogList;