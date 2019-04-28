import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Arrow from './';

storiesOf('Arrow', module).add('Arrow', () => (
    <>
        <Arrow angle={0} /> 1<br />
        <Arrow angle={90} /> 2<br />
        <Arrow angle={180} /> 3<br />
        <Arrow angle={270} /> 4<br />
        
        <br />
        
        This below example is just an SVG.  could do a CSS transform rotate(90deg) on it to show toggle.

        <br/>

        <svg width="19" height="32"><path d="M.61 1.391l17.543 15-17.544 15z" fill="#020202" fillRule="nonzero" stroke="#413C3C" fill-opacity=".752"/></svg>

        <br />

        <svg width="30" height="30">
            <g>
                <svg width="19" height="30"><path d="M.61 1.391l17.543 15-17.544 15z" fill="#020202" fillRule="nonzero" stroke="#413C3C" fill-opacity=".752"/></svg>
            </g>
        </svg>
    </>
));
