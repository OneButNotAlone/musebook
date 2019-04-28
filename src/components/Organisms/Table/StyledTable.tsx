import { Table as defaultTable, styled, as } from 'reakit';

export const StyledTable = styled(defaultTable)`
    border-radius: 4px;
    margin: -20px 0 13px;
    align-items: stretch;
    width: 100%;
    border-spacing: 1px;
    th {
        background-color: #187EC2;
        height: 60px;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        font-family: 'Bogle', sans-serif;
        align-items: center;
        word-wrap: normal;
        hyphens: auto;
        justify-content: center;
        text-align: center;
        padding: 8px;
        &:first-child {
            border-radius: 4px 0 0 0;
        }
        &:nth-child(8) {
            border-radius: 0 4px 0 0;
        }
    }
    td {
        font-size: 16px;
        color: ${(props) => props.color || 'black'};
        font-weight: default;
        font-family: 'Bogle', sans-serif;
        align-items: center;
        text-align: left;
        vertical-align: middle;
        hyphens: auto;
        white-space: pre-line;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 32px 20px 32px 20px;
        &:first-child {
            border-left: 1px solid #ccc;
        }
        &:last-child {
            border-right: 1px solid #ccc;
        }
        &:nth-last-child(0) {
            border-radius: 0 0 0 4px;
        }
    }
    tbody {
        border-radius: 4px;
    }

    tr {
        &:hover {
            background-color: #f6f6f6;
        }
    }
`;