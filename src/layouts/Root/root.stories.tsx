import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Root } from './';

storiesOf('Layouts', module).add('Root', () => (
    <Root>
        Root wraps around all other elements and provides global styles
    </Root>
));
