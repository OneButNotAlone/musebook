import * as React from 'react';
import 'jest-styled-components';
import Button from '../index';
import * as renderer from 'react-test-renderer'


test('Button should render with correct default styles', () => {
    const tree = renderer.create(
        <Button />
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('height', '36px')
    expect(tree).toHaveStyleRule('min-width', '64px')
    expect(tree).toHaveStyleRule('border', '1px solid #187EC2')
    expect(tree).toHaveStyleRule('border-radius', '4px')
    expect(tree).toHaveStyleRule('background-color', '#187EC2')
    expect(tree).toHaveStyleRule('color', 'white')
    expect(tree).toHaveStyleRule('text-transform', 'uppercase')
    expect(tree).toHaveStyleRule('padding', '0 16px')
    expect(tree).toHaveStyleRule('text-align', 'center')
    expect(tree).toHaveStyleRule('font-size', '18px')
    expect(tree).toHaveStyleRule('font-family', expect.stringContaining('Bogle'))
    expect(tree).toHaveStyleRule('background-color', '#0a4e8c', { modifier: ':hover' })
    expect(tree).toHaveStyleRule('border', '1px solid #0a4e8c', { modifier: ':hover' })
});

test('Button should render with correct rounded styles', () => {
    const tree = renderer.create(
        <Button type='rounded'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('text-transform', 'uppercase')
    expect(tree).toHaveStyleRule('color', 'white')
    expect(tree).toHaveStyleRule('border-radius', '25.5px')
    expect(tree).toHaveStyleRule('min-width', '100px')
    expect(tree).toHaveStyleRule('max-width', '300px')
    expect(tree).toHaveStyleRule('height', '36px')
    expect(tree).toHaveStyleRule('border', 'none')
    expect(tree).toHaveStyleRule('font-weight', 'bold', { modifier: ':hover' })
});

test('Button should render with correct outlined styles', () => {
    const tree = renderer.create(
        <Button type='outlined'/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', 'white')
    expect(tree).toHaveStyleRule('border', '1px solid white')
});

test('Button should render with correct secondary styles', () => {
    const tree = renderer.create(
        <Button secondary />
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background-color', 'white')
    expect(tree).toHaveStyleRule('color', 'black')
    expect(tree).toHaveStyleRule('border', '1px solid #666666')
    expect(tree).toHaveStyleRule('color', '#187EC2', { modifier: ':hover' })
    expect(tree).toHaveStyleRule('border', '1px solid #187EC2', { modifier: ':hover' })
});

test('Button should render with correct disabled styles', () => {
    const tree = renderer.create(
        <Button disabled />
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background-color', '#ccc')
    expect(tree).toHaveStyleRule('color', '#666666')
    expect(tree).toHaveStyleRule('border', '1px solid #ccc')
});