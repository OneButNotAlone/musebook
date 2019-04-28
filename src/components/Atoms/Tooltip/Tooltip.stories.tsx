import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip } from './';

import * as ToolTipMarkdown from './Tooltip.md';

storiesOf('Tooltip', module).add(
    'Default',
    () => (
        <button style={{ margin: '100px 100px' }}>
            Button Text
            <Tooltip placement="top">
                <Tooltip.Arrow />
                Tooltip
            </Tooltip>
            <Tooltip placement="right">
                <Tooltip.Arrow />
                Tooltip
            </Tooltip>
            <Tooltip placement="bottom">
                <Tooltip.Arrow />
                Tooltip
            </Tooltip>
            <Tooltip placement="left">
                <Tooltip.Arrow />
                Tooltip
            </Tooltip>
        </button>
    ),
    { notes: ToolTipMarkdown }
);
