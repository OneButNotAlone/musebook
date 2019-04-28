import { Table as defaultTable, as } from 'reakit';
import { PaginatedTable } from './PaginatedTable';
import PaginatorContainer from '../../../containers/PaginatorContainer';
import { StyledTable } from './StyledTable';

import * as React from 'react';
import { rowData } from './Table.stories';

interface TableColumnHeader {
    name: string;
    url?: string | undefined;
    icon?: React.ReactNode;
    filterFn?: (filterVal: string) => any; // TODO: return type of users rowData
}

export interface TableProps {
    paginated?: boolean;
    headers?: TableColumnHeader[];
    rowData?: any[]; // TODO: use generics to allow user to supply the shape
    collapsibleRows?: boolean;
    delimiter?: string;
    renderCollapsedData?: (index: number) => React.ReactNode;
    collapsedSpan?: number;
}

export const Table: React.SFC<TableProps> = ({ paginated, children, ...rest }) => {

    if (paginated) {
        return (
            <PaginatorContainer.Provider length={rowData.length}>
                <PaginatedTable {...rest}>{children}</PaginatedTable>
            </PaginatorContainer.Provider>
            )
    }
    return <StyledTable>{children}</StyledTable>;
};

export default as(defaultTable)(Table);
