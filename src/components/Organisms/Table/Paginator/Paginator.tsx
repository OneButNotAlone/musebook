import * as React from 'react';
import styled from 'styled-components';

export const Select = styled.select`
    height: 35.92px;
    width: 452.25px;
    background-color: #ffffff;
    border: 0.68px solid #979797;
    border-radius: 5.4px;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    margin-bottom: 15px;
    font-family: 'Bogle', sans-serif;
    font-size: 14px;
    color: var(--wm-gray);
`;

export const P = styled.p`
    margin-top: 5px;
    font-size: 18px;
    line-height: 25px;
`;

export const PaginatorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-left: 0px;
`;

const PaginatorTxt = styled.p`
    margin-top: 5px;
    display: inline-block;
`;

interface PaginatorProps {
    data: any[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
    startIndex?: number;
    endIndex?: number;
    rowsToShow: any;
    nextPage: () => any;
    prevPage: () => any;
}

export class Paginator extends React.PureComponent<PaginatorProps, {}> {
    constructor(props: PaginatorProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLSelectElement>, cb: (sel: any) => void) {
        const selected = e.target.value;
        cb(selected);
    }

    render() {
        const { data, startIndex, endIndex, onChange, rowsToShow } = this.props;
        return (
            <>
                <PaginatorWrapper >
                    <P style={{ marginTop: '5px' }}>
                        <PaginatorTxt>
                            Showing&nbsp;
                        </PaginatorTxt>
                        {startIndex! + 1} - {endIndex} of {' '}
                        {data.length}
                        <Select
                            style={{
                                color: '#555555',
                                fontFamily: 'Bogle',
                                fontSize: '14px',
                                marginLeft: 10,
                                marginTop: '0px',
                                outline: 0,
                                width: 'auto',
                            }}
                            onChange={(e) => this.handleChange(e, onChange)}
                            value={rowsToShow}
                            disabled={false}>
                            <option value="10">Show 10</option>
                            <option value="25">Show 25</option>
                            <option value="50">Show 50</option>
                            <option value="all">Show All</option>
                        </Select>
                    </P>
                </PaginatorWrapper>
            </>
        );
    }
}
export default Paginator;