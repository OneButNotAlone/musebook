import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './';

import * as ButtonMarkdown from './Button.md';

storiesOf('Buttons', module)
    .add('Default', () => (
        <Button>Default Button</Button>
    ), { notes: ButtonMarkdown })
    .add('Secondary', () => (
        <Button secondary>Flat Secondary</Button>
    ), { notes: ButtonMarkdown })
    .add('Disabled', () => (
        <Button disabled>Flat Disabled</Button>
    ), { notes: ButtonMarkdown })
    .add('Flat Secondary', () => (
        <Button secondary disabled>
            Flat Secondary Disabled
        </Button>
    ), { notes: ButtonMarkdown })
    .add('Outlined', () => (
        <Button type="outlined">Flat Outlined</Button>
    ), { notes: ButtonMarkdown });
