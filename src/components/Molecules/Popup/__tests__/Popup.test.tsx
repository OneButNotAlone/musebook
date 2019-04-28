import * as React from 'react';
import 'jest-styled-components';
import Popup from '../';
import * as renderer from 'react-test-renderer'


test('Checked popup should render correctly', () => {
    const tree = renderer.create(
        <Popup />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Checked popup with disableBackgroundClose prop should render correctly', () => {
    const tree = renderer.create(
        <Popup disableBackgroundClose={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Checked Popup.Toggle should render correctly', () => {
    const tree = renderer.create(
        <Popup.Toggle />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
