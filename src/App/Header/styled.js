import styled from 'styled-components';

export const StyledHeader = styled.header`
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    color: ${({ theme }) => theme.color.forestGreen};
    width: 100%;
    text-shadow: black 2px 1px;
    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 30px;
        margin-left: 40px;
        width: 80%;
    }
`