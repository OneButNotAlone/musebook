import * as React from 'react';
import { Input, as } from 'reakit';

interface Props extends React.Props<RadioButton> {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    onChange?: any;
}

class RadioButton extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <label
                    style={{
                        marginRight: 32,
                        fontFamily: 'Bogle, sans-serif',
                        fontSize: '18px',
                        color: '#666666'
                    }}>
                    <Input
                        type="radio"
                        name={this.props.name}
                        value={this.props.value}
                        checked={this.props.checked}
                        onChange={this.props.onChange}
                        style={{
                            marginRight: 12,
                            minWidth: 16,
                            maxWidth: 16,
                            height: 16,
                            marginLeft: 1
                        }} />
                    {this.props.label}
                </label>
            </>
        );
    }
}

export default as(Input)(RadioButton);
