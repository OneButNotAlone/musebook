import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tooltip } from '../Tooltip';

describe('Tooltip component', () => {

    test('Tooltip exists', () => {
        expect(Tooltip).toBeDefined();
    })

    
    test('Tooltip styles match snapshot', () => {
        const tree = renderer.create(
            <Tooltip />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        })

    test('Tooltip.Arrow exists', () => {
        expect(Tooltip.Arrow).toBeDefined();
    })
        
    test('Tooltip.Arrow styles match snapshot', () => {
        const tree = renderer.create(
            <Tooltip.Arrow />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

})