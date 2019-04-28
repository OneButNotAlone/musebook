import * as React from 'react';
import { Overlay, Block } from 'reakit';
import { namespace } from './context';

const PopupToggleComponent: React.SFC<{}> = (props) => {
    return (
        <Overlay.Container context={namespace}>
            {(overlay) => (
                <Block as={Overlay.Toggle} {...overlay}>
                    {props.children}
                </Block>
            )}
        </Overlay.Container>
    );
};

export default PopupToggleComponent;
