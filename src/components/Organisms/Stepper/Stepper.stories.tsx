import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from './Stepper';
import StepperContainer, { StepperRenderProps } from './StepperContainer';
import { Provider } from 'constate';

import * as StepperMarkdown from './Stepper.md';

storiesOf('Stepper', module)
    .addDecorator((story) => <Provider>{story()}</Provider>)
    .add('basic', () => (
        <>
            <StepperContainer>
                {({ nextStep, prevStep }: StepperRenderProps) => (
                    <Stepper
                        steps={[
                            {
                                header: 'This is the first step in the stepper.. Enjoy!',
                                optional: false,
                                render: <button onClick={nextStep}>Next</button>,
                                subHeader: 'Subheader for step 1'
                            },
                            {
                                header: 'This is the second step in the stepper.. Enjoy!',
                                optional: true,
                                render: <><button onClick={prevStep}>Previous</button><button onClick={nextStep}>Next</button></>,
                                subHeader: 'Subheader for step 2'
                            },
                            {
                                header: 'This is the third step in the stepper.. Enjoy!',
                                optional: true,
                                render: <button onClick={prevStep}>Previous</button>,
                                subHeader: 'Subheader for step 3'
                            }
                        ]}
                    />
                )}
            </StepperContainer>
        </>
    ), { notes: StepperMarkdown });
