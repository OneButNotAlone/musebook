import * as React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { Provider } from 'reakit';
import theme from 'reakit-theme-default';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';


const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator((story) => <Provider theme={theme}>{story()}</Provider>);
addDecorator(withA11y);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({ viewport: {} });

configure(loadStories, module);
