import styled from 'styled-components';
import Stack from '../../components/Style/Stack';
import Center from '../../components/Style/Center';

export const Page = styled(Stack('div'))`
    min-height: 100vh;
    background-color: #f0f2f5;
`
export const CenterContainer = styled(Center('div'))`
    width:70%;
`
export const StackContainer = Stack('div');