import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Sidebar from './';
import Button from '../../Atoms/Button';

storiesOf('Sidebar', module)
    .add('Left Sidebar (default)', () => (
        <>
            <Sidebar>
                Sidebar content
                <Sidebar.Toggle>
                    <button>close</button>
                </Sidebar.Toggle>
            </Sidebar>

            <Sidebar.Toggle>
                <Button>open</Button>
            </Sidebar.Toggle>
        </>
    ))
    .add('Right Sidebar', () => (
        <>
            <Sidebar align="right">
                Sidebar content
                <Sidebar.Toggle>
                    <button>close</button>
                </Sidebar.Toggle>
            </Sidebar>

            <Sidebar.Toggle>
                <Button>open</Button>
            </Sidebar.Toggle>
        </>
    ));
