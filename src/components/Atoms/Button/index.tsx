import * as React from 'react';

import { styled, as, Button as BaseButton, BlockProps } from 'reakit';

const BaseFlatButton = styled(BaseButton)`
    height: 36px;
    min-width: 64px;
    border-radius: 4px;
    background-color: #187EC2;
    text-transform: uppercase;
    padding: 0 16px;
    text-align: center;
    font-size: 18px;
    font-family: 'Bogle';
`;

const PrimaryFlatButton = styled(BaseFlatButton)`
    background-color: #187EC2;
    color: white;
    border: 1px solid #187EC2;

    &:hover {
        background-color: #0a4e8c;
        border: 1px solid #0a4e8c;
    }
`;

const SecondaryFlatButton = styled(BaseFlatButton)`
    background-color: white;
    border: 1px solid #666666;
    color: black;

    &:hover {
        border: 1px solid #187EC2;
        color: #187EC2;
    }
`;

const OutlinedFlatButton = styled(BaseFlatButton)`
    color: white;
    border: 1px solid white;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

const DisabledFlatButton = styled(BaseFlatButton)`
    background-color: #ccc;
    color: #666666;
    border: 1px solid #ccc;
`;

const RoundedButton = styled(BaseButton)`
    background: linear-gradient(-134deg, #0CB0F3 0%, #116CAE 49%, #0A4E8C 100%);
    text-transform: uppercase;
    color: white;
    border-radius: 25.5px;
    min-width: 100px;
    max-width: 300px;
    height: 36px;
    border: none;

    &:hover {
        font-weight: bold;
    }
`;

const ComposedButton: React.SFC<
    {
        type?: 'flat' | 'outlined' | 'rounded';
        secondary?: boolean;
        disabled?: boolean;
    } & BlockProps
> = (props) => {
    const { type = 'flat', secondary, disabled, children } = props;

    switch (type) {
        case 'flat':
            if (disabled === true) {
                return <DisabledFlatButton {...props}>{children}</DisabledFlatButton>;
            }

            if (secondary === true) {
                return <SecondaryFlatButton {...props}>{children}</SecondaryFlatButton>;
            }

            return <PrimaryFlatButton {...props}>{children}</PrimaryFlatButton>;

        case 'outlined':
            return <OutlinedFlatButton {...props}>{children}</OutlinedFlatButton>;

        case 'rounded':
            return <RoundedButton {...props}>{children}</RoundedButton>;

        default:
            return <PrimaryFlatButton {...props}>{children}</PrimaryFlatButton>;
    }
};

export const Button = as('button')(ComposedButton);
export default Button;
