import * as React from 'react';
import styled from 'styled-components';
import { Block, Label, Input, as } from 'reakit';

const ReakitLabel = styled(Label)`
    position: absolute;
    font-size: 10px;
    font-family: 'Bogle', sans-serif;
    margin-top: -7.5px;
    margin-left: 16px;
    background: white;
    padding: 0 3px;
    color: #2f2951;
`;

const ReakitInput = styled(Input)`
    height: 56px;
    outline: none;
    border: 1px solid #9b9b9b;
    border-radius: 4px;
    margin: 24px 0;
    font-family: 'Bogle', sans-serif;
    font-size: 18px;
    padding: 0 16px;
    text-indent: 0;
    color: black;
    &:focus {
        border: 2px solid #2f2951;
        padding: 0 15px;
    }
    &::placeholder {
        color: #9b9b9b;
    }
`;

interface Props extends React.Props<TextInput> {
    label: string;
    onChange?: any;
}

interface State {
    showLabel: boolean;
}

class TextInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showLabel: false
        };

        this.showLabel = this.showLabel.bind(this);
        this.hideLabel = this.hideLabel.bind(this);
    }

    showLabel() {
        this.setState({
            showLabel: true
        });
    }

    hideLabel() {
        this.setState({
            showLabel: false
        });
    }

    render() {
        return (
            <Block>
                {this.state.showLabel
                    ? <ReakitLabel>{this.props.label}</ReakitLabel>
                    : ''}
                <ReakitInput
                    placeholder={this.props.label}
                    onChange={this.props.onChange}
                    onFocus={this.showLabel}
                    onBlur={this.hideLabel}
                />
            </Block>
        );
    }
}

export default as(ReakitInput)(TextInput);
