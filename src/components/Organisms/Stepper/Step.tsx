import * as React from 'react';
import * as config from './config';

import { LeftColumn, ColumnPad, RightColumn } from './styled/Column';
import { Header, SubHeader } from './styled/Header';
import { Row } from './styled/Row';
import StepIcon from './StepIcon';

import Measure from 'react-measure';

export interface StepProps {
    activeStep: number;
    currentIndex: number;
    stepCount: number;
    header: string | React.ReactNode;
    optional?: boolean;
    subHeader?: string;
    content?: React.ReactNode;
}

interface StepState {
    status?: config.Status;
    height: number;
}

export const Icon: React.SFC<{ index: number; activeStep: number; stepCount: number }> = ({
    index,
    activeStep,
    stepCount
}) => {
    const shouldLine = stepCount === index + 1 ? false : true;

    if (index === activeStep) {
        return <StepIcon icon={index + 1} status="ACTIVE" renderLine={shouldLine} />;
    }

    if (index < activeStep) {
        return <StepIcon icon="CHECKMARK" status="COMPLETE" renderLine={shouldLine} />;
    }

    return <StepIcon icon={index + 1} status="INACTIVE" renderLine={shouldLine} />;
};

export class Step extends React.Component<StepProps, StepState> {
    constructor(props: StepProps) {
        super(props);

        this.state = {
            height: -1
        };

        this.setHeight = this.setHeight.bind(this);
    }

    setHeight(newHeight: number) {
        this.setState({ height: newHeight });
    }

    render() {
        const {
            activeStep,
            stepCount,
            currentIndex,
            header,
            subHeader,
            optional,
            children
        } = this.props;

        const { height } = this.state;

        return (
            <Row>
                <LeftColumn height={height}>
                    <Icon index={currentIndex} activeStep={activeStep} stepCount={stepCount} />
                </LeftColumn>

                <ColumnPad width={24} />

                <Measure
                    onResize={(contentRect: any) => {
                        this.setHeight(contentRect.entry.height);
                    }}>
                    {({ measureRef }: any) => (
                        <RightColumn innerRef={measureRef}>
                            <Header>{header}</Header>

                            {optional && currentIndex > activeStep && <SubHeader>Optional</SubHeader>}
                            {currentIndex === activeStep && (
                                <>
                                    {children}
                                </>
                            )}
                            {currentIndex < activeStep && <SubHeader>{subHeader}</SubHeader>}
                        </RightColumn>
                    )}
                </Measure>
            </Row>
        );
    }
}

export default Step;