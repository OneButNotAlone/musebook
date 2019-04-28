import * as React from 'react';
import styled from 'styled-components';
import Step from './Step';
import StepperContainer, {
    State as StepperState,
} from './StepperContainer';

// this is for alignment of the stepper
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface StepperProps {
    steps: Array<{
        optional: boolean;
        header: string | React.ReactNode;
        subHeader?: string;
        render: React.ReactNode;
    }>;
}

export class Stepper extends React.Component<StepperProps, StepperState> {
    constructor(props: StepperProps) {
        super(props);
    }

    render() {
        const { steps } = this.props;

        return (
            <StepperContainer>
                {({ activeStep }: StepperState) => (
                    <Wrapper>
                        {steps.map((value, index, array) => {
                            return (
                                <Step
                                    key={index}
                                    currentIndex={index}
                                    activeStep={activeStep}
                                    stepCount={array.length}
                                    header={value.header}
                                    subHeader={value.subHeader}
                                    optional={value.optional}>
                                    <br />
                                    {value.render}
                                </Step>
                            );
                        })}
                    </Wrapper>
                )}
            </StepperContainer>
        );
    }
}

export default Stepper;