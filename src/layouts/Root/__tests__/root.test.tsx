import * as React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';

import { Root } from '../';

test('Root layout matches snapshot', () => {
    const { container } = render(<Root>Root Layout wraps around everything</Root>);
    expect(container).toMatchSnapshot();
});
