import * as React from 'react';
import { Block, Sidebar, Backdrop } from 'reakit';
import StyledSidebar from './Sidebar';

import { namespace } from './context';

export interface SidebarContainerProps {
    align?: 'left' | 'right';
}

const SidebarContainer: React.SFC<SidebarContainerProps> = ({ align = 'left', children }) => {
    return (
        <Sidebar.Container context={namespace}>
            {(sidebar) => (
                <Block>
                    <Backdrop fade as={Sidebar.Hide} {...sidebar} />
                    <StyledSidebar slide align={align} {...sidebar}>
                        {children}
                    </StyledSidebar>
                </Block>
            )}
        </Sidebar.Container>
    );
};

export default SidebarContainer;
