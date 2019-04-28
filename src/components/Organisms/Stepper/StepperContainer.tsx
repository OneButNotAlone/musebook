import * as React from 'react';
import { Container } from 'constate';

export interface State {
    activeStep: number;
}

export const initialState: State = {
    activeStep: 0
};

export interface Actions {
    nextStep: () => void;
    prevStep: () => void;
}

export const actions: Actions = {
    nextStep: () => (state: State) => {
        return { activeStep: state.activeStep + 1 };
    },

    prevStep: () => (state: State) => {
        if (state.activeStep > 0) {
            return { activeStep: state.activeStep - 1 };
        }
        return state.activeStep;
    }
};

export type StepperRenderProps = Actions & State;

export const StepperContainer = (props: any) => {
    return <Container initialState={initialState} actions={actions} context="stepper" {...props} />;
};

export default StepperContainer;