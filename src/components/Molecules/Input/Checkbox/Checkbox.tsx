import * as  React from 'react';
import {useState, FunctionComponent} from 'react';
import { Input, as } from 'reakit';

interface CheckboxProps {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: () => any;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ label, name, value, onChange, checked }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
            <label
                style={{
                    margin: '16px 32px 16px 0',
                    fontFamily: 'Bogle, sans-serif',
                    fontSize: '18px',
                    color: '#666666'
                }}>
                <Input
                    type="checkbox"
                    name={name}
                    value={value}
                    checked={checked ? checked : isChecked}
                    onClick={() => setIsChecked(!isChecked)}
                    onChange={onChange}
                    style={{
                        marginRight: 12,
                        minWidth: 16,
                        maxWidth: 16,
                        height: 16
                    }} />
                {label}
            </label>
    );
}

export default as(Input)(Checkbox);