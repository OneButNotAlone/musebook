import * as React from 'react';
import 'jest-styled-components';
import { Checkbox, RadioButton, Dropdown, TextInput } from '../index';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Checkbox', () => {

    test('Checkbox exists', () => {
        expect(Checkbox).toBeDefined();
    });
    
    it('test click event', () => {
        const mockOnClick = jest.fn();

        const checkbox = shallow((<Checkbox label="Option 1" name="option" value="option1" onClick={mockOnClick}/>));
        checkbox.find("input").simulate('click');
        expect(mockOnClick.mock.calls.length).toEqual(1);
    })

    test('Checked checkbox should render correctly', () => {
        const tree = renderer.create(
            <Checkbox label="Option 1" name="option" value="option1" checked={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Unchecked checkbox should render correctly', () => {
        const tree = renderer.create(
            <Checkbox label="Option 1" name="option" value="option1" checked={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})

test('Checked radio button should render correctly', () => {
    const tree = renderer.create(
        <RadioButton name="option" value="option1" label="Option 1" checked={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Unchecked radio button should render correctly', () => {
    const tree = renderer.create(
        <RadioButton name="option" value="option1" label="Option 1" checked={false} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Dropdown should render correctly', () => {
    const tree = renderer.create(
        <Dropdown>
            <option>Dropdown</option>
            <option>
                Some crazy long text repeated to make even longer Some crazy long text repeated
                to make even longer Some crazy long text repeated to make even longer
                </option>
        </Dropdown>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Text Input should render correctly', () => {
    const tree = renderer.create(
        <TextInput label="Input Label" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
