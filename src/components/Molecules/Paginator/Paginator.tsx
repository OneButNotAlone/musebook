import * as React from 'react';
import styled from 'styled-components';

import { Select } from '../../Atoms/Inputs';
import { Button } from '../../Atoms/Button';

export const P = styled.p`
    font-size: 18px;
    line-height: 25px;
`;

export const PaginatorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

interface PaginatorProps {
    data: any[];
    onLoad: (data: any[]) => any;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
    startIndex: number;
    endIndex: number;
    rowsToShow: any;
    nextPage: () => any;
    prevPage: () => any;
}

export class Paginator extends React.PureComponent<PaginatorProps, {}> {
    constructor(props: PaginatorProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { data, onLoad } = this.props;
        onLoad(data);
    }

    handleChange(e: React.ChangeEvent<HTMLSelectElement>, cb: (sel: any) => void) {
        const selected = e.target.value;
        cb(selected);
    }

    render() {
        const { data, startIndex, endIndex, nextPage, prevPage, onChange, rowsToShow } = this.props;

        return (
            <>
                <PaginatorWrapper >
                    <P style={{ margin: 0 }}>
                        Showing {startIndex + 1} - {endIndex} of{' '}
                        {data.length}
                        <Select
                            style={{
                                width: 'auto',
                                marginLeft: 20,
                                marginBottom: 0,
                                fontSize: 14,
                                color: '#555555',
                                outline: 0
                            }}
                            onChange={(e) => this.handleChange(e, onChange)}
                            value={rowsToShow}
                            disabled={data.length < 10}>
                            <option value="10">Show 10</option>
                            <option value="25">Show 25</option>
                            <option value="50">Show 50</option>
                            <option value="all">Show All</option>
                        </Select>
                    </P>

                    <div>
                        <Button onClick={prevPage} secondary>&lt;</Button>
                        <Button onClick={nextPage} secondary>&gt;</Button>
                    </div>
                </PaginatorWrapper>
            </>
        );
    }
}
export default Paginator;