import * as React from 'react';
import { Container, ActionMap, EffectMap, SelectorMap, ComposableContainer } from 'constate';
import { rowData } from '../components/Organisms/Table/Table.stories';

export interface State {
    data?: DataValues;
    filteredData?: DataValues;
    selected: SelectedValues;
}

export interface SelectedValues {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
}

export interface DataValues {
    data: {}[];
}

// export const initialData: DataValues = {
//     data: []
// };

export const initialSelected: SelectedValues = {
    item1: '',
    item2: '',
    item3: '',
    item4: ''
};

export const initialState: State = {
    selected: initialSelected
};

export interface Effects {
    filterItem1: (value: string) => any;
}

const MyFuncs = {
    filterItem1: (value: string) => async ({
        setState
    }: {
        state: State;
        setState: any;
    }): Promise<void> => {
        setState((state: State) => ({
            ...state,
            selected: { ...state.selected, value }
        }));
        value === ''
            ? setState((state: State) => ({ ...state, showPlatformFilter: false }))
            : setState((state: State) => ({ ...state, showPlatformFilter: true }), console.log('filter item', value));
    }
};

export const effects: EffectMap<State, Effects> = {
    filterItem1: (value: string) => MyFuncs.filterItem1(value)
};

export type TableFilterRenderProps = Effects & State;

export const TableFilterContainer: ComposableContainer<State, Effects> = (props: any) => {
    return <Container initialState={initialState} effects={effects} {...props} />;
};

export default TableFilterContainer;
