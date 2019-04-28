import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Popup from './';

import * as PopupMarkdown from './Popup.md'

storiesOf('Popup', module)
    .add('Basic', () => (
        <>
            <Popup>
                <h1>Popup content</h1>
                <p>Click anywhere in the background to close this popup</p>
            </Popup>

            <Popup.Toggle>
                <button>Open popup</button>
            </Popup.Toggle>
        </>
    ), { notes: PopupMarkdown })
    .add('With close button', () => (
        <>
            <Popup>
                <h1>Popup content</h1>
                <p>Click anywhere in the background or the button below to close this popup</p>
                <Popup.Toggle>
                    <button>Close popup</button>
                </Popup.Toggle>
            </Popup>

            <Popup.Toggle>
                <button>Open popup</button>
            </Popup.Toggle>
        </>
    ), { notes: PopupMarkdown })
    .add('With background clicking disabled', () => (
        <>
            <Popup disableBackgroundClose={true}>
                <h1>Popup content</h1>
                <p>Closing this popup by clicking in the background is disabled</p>
                <Popup.Toggle>
                    <button>Close popup</button>
                </Popup.Toggle>
            </Popup>

            <Popup.Toggle>
                <button>Open popup</button>
            </Popup.Toggle>
        </>
    ), { notes: PopupMarkdown })
