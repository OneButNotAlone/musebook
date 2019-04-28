# Stepper

A `Stepper` is a series of steps, which is an `Object Array`. A `Step` contains data such as the header, sub header, whether or not the step is optional and what is rendered in a step. 

The `Step` also provides info on the active step and step count in order to determine the Icon that is rendered.

A Stepper Container is used to abstract state away from the Stepper itself so the `nextStep`, `prevStep` actions can be passed into any children.

```jsx
<Stepper />
```

```jsx
import StepperContainer, { StepperRenderProps } from './StepperContainer'
import Stepper from '../components/organisms/Stepper';


<StepperContainer>
    {({nextStep, prevStep }: StepperRenderProps) => (
        <Stepper
            steps={[
                {
                    header: 'This is the first step in the stepper.. Enjoy!',
                    optional: false,
                    render: <Step1Component {...props} />,
                    subHeader: 'Subheader for step 1'
                },
                {
                    header: 'This is the second step in the stepper.. Enjoy!',
                    optional: true,
                    render: <Step2Component {...props} />,
                    subHeader: 'Subheader for step 2'
                }
            ]}
        />

    )}
</StepperContainer>
```
