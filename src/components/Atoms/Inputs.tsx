import styled from 'styled-components';

export const LoginInput = styled.input`
    height: 56px;
    width: 280px;
    border-radius: 4px;
    border: 1px solid #979797;
    align-self: center;
    text-indent: 16px;
    font-size: 20px;
    font-family: 'Bogle', sans-serif;
    background-color: #fff;

    &::placeholder {
        color: #cccccc;
    };

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
`;

export const Select = styled.select`
    height: 35.92px;
    width: 452.25px;
    background-color: #ffffff;
    border: 0.68px solid #979797;
    border-radius: 5.4px;
    cursor: pointer;
    margin-bottom: 15px;
    font-family: 'Bogle', sans-serif;
    font-size: 14px;
    color: var(--wm-gray);
`;

