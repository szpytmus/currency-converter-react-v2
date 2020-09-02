import styled from 'styled-components';

export const Loading = styled.p`
color: ${({ theme }) => theme.color.forestGreen};
`
export const Failure = styled.p`
color: ${({ theme }) => theme.color.crimson};
`
export const StyledForm = styled.form`
    background-color:rgb(197, 196, 196);
    margin: auto;
    text-align: center;
    max-width:1000px;
    border-bottom: 2px solid ${({ theme }) => theme.color.forestGreen};
    padding:20px;
`;

export const Select = styled.select`
    padding: 5px;
    color: ${({ theme }) => theme.color.forestGreen};
    border: 2px solid rgb(49, 138, 49);
    margin-left: 15px;
`;

export const Label = styled.label`
    font-size: 26px;
    max-width: 180px;
    margin-right: 20px;
    text-shadow: ${({ theme }) => theme.color.forestGreen} 1px 1px;
`;

export const Button = styled.button`
    background:${({ theme }) => theme.color.forestGreen};
    color:white;
    border:none;
    padding:10px;
    margin: 20px 0 0 20px;
    font-size: 16px;
    transition: 1s;

    &:hover{
    transform:scale(1.1);
    filter: brightness(120%);
    }
`;

export const Input = styled.input`
    padding: 5px;
    color: ${({ theme }) => theme.color.forestGreen};
    border: 2px solid rgb(49, 138, 49);
    margin-left: 15px;
`;