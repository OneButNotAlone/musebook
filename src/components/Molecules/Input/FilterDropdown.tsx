import * as React from 'react';
import styled from 'styled-components';

export const SmallSelect = styled.select`
    height: 35.92px;	
    width: 120px;	
    background-color: #FFFFFF;
    border: 0.68px solid #979797;	
    border-radius: 5.4px;   
    cursor: pointer;
    margin-bottom: 15px;
`;

interface FilterSelectProps {
    placeholder: string;
    data: string[];
    onChange?: (e: any) => void;
}

export const FilterSelect: React.SFC<FilterSelectProps> = ({ placeholder, data, onChange }) => {

    // let list: string[];

    // data ? list = data.sort((stringA: string, stringB: string) => stringA.toLowerCase().localeCompare(stringB.toLowerCase())) : list = data;

    // TODO: Check the actual value that is selected
    // * https://stackoverflow.com/questions/13343566/set-select-option-selected-by-value

    return (
        <SmallSelect onChange={onChange}>
            <option
                value=""
                style={{ display: 'none' }}>
                {placeholder}
            </option>
            <option
                value="All" >
                All
            </option>
            {data.map((value: string, index: number) => (
                <option
                    value={value}
                    key={index}>
                    {value}
                </option>
            ))
            }
        </SmallSelect>
    );
};