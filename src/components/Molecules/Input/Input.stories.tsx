import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput, Dropdown, RadioButton, Checkbox } from './index';
import * as InputMarkdown from './Input.md'


storiesOf('Input', module)
    .add('TextInput', () => (
        <>
            <TextInput label="Input Label" />
        </>
    ), { notes: InputMarkdown })
    .add('Dropdown', () => (
        <>
            <Dropdown>
                <option>Dropdown</option>
                <option>
                    Some crazy long text repeated to make even longer Some crazy long text repeated
                    to make even longer Some crazy long text repeated to make even longer
                </option>
            </Dropdown>
        </>
    ), { notes: InputMarkdown })
    .add('RadioButton', () => (
        <>
            <RadioButton name="option" value="option1" label="Option 1" checked={true} />
            <RadioButton name="option" value="option2" label="Option 2" checked={false} />
        </>
    ), { notes: InputMarkdown })
    .add('Checkbox', () => (
        <>
            <Checkbox name="option" value="option1" label="Option 1" checked={true} />
            <Checkbox name="option" value="option2" label="Option 2" checked={false} />
            <br />
            <Checkbox name="option" value="option3" label="Option 3" checked={false} />
            <Checkbox name="option" value="option4" label="Option 4" checked={false} />
        </>
    ), { notes: InputMarkdown });
