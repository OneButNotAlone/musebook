import * as React from 'react';
import { Block, Overlay, Backdrop } from 'reakit';
import { namespace } from './context';

export interface PopupContainerProps {
    disableBackgroundClose?: boolean;
}

const PopupContainer: React.SFC<PopupContainerProps> = ({ disableBackgroundClose = false, children }) => {
    const allowExternalInteraction = disableBackgroundClose ? false : true;
    return (
        <Overlay.Container context={namespace}>
            {(overlay) => (
                <Block>
                    <Backdrop fade {...overlay} />
                    <Overlay
                        fade slide expand
                        {...overlay}
                        hideOnClickOutside={allowExternalInteraction}
                        hideOnEsc={allowExternalInteraction}>
                        {children}
                    </Overlay>
                </Block>
            )}
        </Overlay.Container>
    );
};

export default PopupContainer;
