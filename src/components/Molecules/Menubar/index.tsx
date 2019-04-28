import * as React from 'react';
import { styled, as, Toolbar, Heading } from 'reakit';

const CustomToolbar = as(Toolbar)(styled(Toolbar)`

`);

export const Menubar: React.SFC<{
    leftContent: React.ReactNode[];
    centerContent: React.ReactNode[];
    rightContent: React.ReactNode[];
}> = ({ children }) => {
    return (
        <Toolbar background="blue" gutter="8px 16px">
            <Toolbar.Content>
                <Heading fontSize={20} margin={0}>
                    adsfasdfasdf
                </Heading>

                <Heading fontSize={20} margin={0}>
                    adsfasdfasdf
                </Heading>
            </Toolbar.Content>
        </Toolbar>
    );
};

export default Menubar;
