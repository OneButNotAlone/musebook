import * as React from 'react';
import { useContext, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Button } from '../../Atoms/Button';
import { Paginator } from './Paginator';
import PaginatorContainer from '../../../containers/PaginatorContainer';
import { Group } from 'reakit';
import { StyledTable as Table } from './StyledTable';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

const TableTopGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(
        max-content max-content max-content max-content max-content max-content max-content
    );
    grid-template-areas: 'page filter . . . . . . btns';
`;

const PaginatorWrapper = styled.div`
    grid-area: page;
`;

const BtnWrapper = styled.div`
    grid-area: btns;
    margin-top: 10px;
`;

interface PaginatedTableProps {
    delimiter?: any;
    headers?: Array<{
        name: string;
        url?: string | undefined;
        icon?: React.ReactNode;
        filterFn?: (filterVal: string) => any;
    }>;
    rowData?: any[];
    collapsibleRows?: boolean;
    renderCollapsedData?: (index: number) => React.ReactNode;
    collapsedSpan?: number;

}

export const PaginatedTable: FunctionComponent<PaginatedTableProps> = ({ headers, rowData, delimiter, collapsedSpan, collapsibleRows, renderCollapsedData }) => {

    const { setRowAmount, nextPage, prevPage, startIndex, endIndex, rowsToShow } = useContext(PaginatorContainer.Context);
    return (
        <>
            <TableTopGrid style={{ marginBottom: '0px' }}>
                <PaginatorWrapper>
                    <Paginator
                        data={rowData}
                        onChange={setRowAmount}
                        startIndex={startIndex}
                        endIndex={rowData.length < 10 ? rowData.length : endIndex}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        rowsToShow={rowsToShow}
                    />
                </PaginatorWrapper>

                <BtnWrapper>
                    <Group style={{ marginRight: '0px', float: 'right' }}>
                        <Button
                            secondary
                            style={{ marginRight: 0 }}
                            onClick={() => {
                                prevPage();
                                window.scrollTo(0, 0);
                            }}
                            disabled={rowData.length < 10 || startIndex === 0}>
                            &lt;
                        </Button>
                        <Button
                            secondary
                            style={{ marginRight: 0 }}
                            onClick={() => {
                                nextPage();
                                window.scrollTo(0, 0);
                            }}
                            disabled={rowData.length < 10 || endIndex === rowData.length}>
                            &gt;
                        </Button>
                    </Group>
                </BtnWrapper>
            </TableTopGrid>

            <Table>
                <TableHead headers={headers} />

                <TableBody
                    rowData={rowData}
                    startIndex={startIndex}
                    endIndex={endIndex}
                    collapsedSpan={collapsedSpan}
                    collapsibleRows={collapsibleRows}
                    delimiter={delimiter}
                    renderCollapsedData={renderCollapsedData}
                />
            </Table>
            <BtnWrapper>
                <Group style={{ marginRight: '0px', float: 'right' }}>
                    <Button
                        secondary
                        style={{ marginRight: 0 }}
                        onClick={() => {
                            prevPage();
                            window.scrollTo(0, 0);
                        }}
                        disabled={rowData.length < 10 || startIndex === 0}>
                        &lt;
                                    </Button>
                    <Button
                        secondary
                        style={{ marginRight: 0 }}
                        onClick={() => {
                            nextPage();
                            window.scrollTo(0, 0);
                        }}
                        disabled={rowData.length < 10 || endIndex === rowData.length}>
                        &gt;
                                    </Button>
                </Group>
            </BtnWrapper>
        </>
    );
};

export default PaginatedTable;
