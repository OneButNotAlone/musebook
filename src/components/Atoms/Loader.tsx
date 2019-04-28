import styled from 'styled-components';

export const Loader = styled.div`
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #3498db;
    width: 75px;
    height: 75px;
    margin: auto;
    animation: spin 0.5s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
    }
`;