import * as React from 'react';
import { Sidebar, Block } from 'reakit';

import { namespace } from './context';

const SidebarToggleComponent: React.SFC<{}> = (props) => {
    return (
        <Sidebar.Container context={namespace}>
            {(sidebar) => (
                <Block as={Sidebar.Toggle} {...sidebar}>
                    {props.children}
                </Block>
            )}
        </Sidebar.Container>
    );
};

export default SidebarToggleComponent;
