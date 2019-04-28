import * as React from 'react';
import styled from 'styled-components';
import { FilterSelect } from '../../../Molecules/Input/FilterDropdown';

const FilterTxt = styled.div`
    margin-top: 5px;
    font-family: 'Bogle', sans-serif;
    font-size: 18px;
`;

interface TableFilterProps {
    onChange?: (value: string) => any;
    filterByTitles: string;
    filterByList: any[];
}


export class TableFilter extends React.PureComponent<TableFilterProps, {}> {
    constructor(props: TableFilterProps) {
        super(props);
    }

    render() {
        const { onChange, filterByTitles, filterByList } = this.props;

        const possibleValues = Object.values(filterByList);

        return (
            <>
                <FilterSelect
                    data={possibleValues}
                    placeholder={possibleValues[0]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        onChange(e.currentTarget.value);
                    }}
                />
            </>
        );
    }
}
export default TableFilter;
