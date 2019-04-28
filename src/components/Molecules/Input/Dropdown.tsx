import styled from 'styled-components';
import { Input, as } from 'reakit';

const Dropdown = styled(as('select')(Input))`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 36px;
    outline: none;
    border: 1px solid #9b9b9b;
    border-radius: 4px;
    font-family: 'Bogle', sans-serif;
    font-size: 14px;
    color: #666666;
    padding: 0 40px 0 16px;
    background: url('http://www.free-icons-download.net/images/small-down-arrow-icon-15593.png');
    background-repeat: no-repeat;
    background-size: 16px 17px;
    background-position: right 16px center;
    &::-ms-expand {
        display: none;
    }
`;

export default Dropdown;
