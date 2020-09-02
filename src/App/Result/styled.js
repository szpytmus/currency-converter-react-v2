import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: auto;
    text-align: center;
    font-size:24px;
    font-weight:bold;
    padding: 20px 0;
    text-shadow: ${({ theme }) => theme.color.forestGreen} 1px 1px;
`