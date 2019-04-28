import * as React from 'react';
import { render } from 'react-testing-library';
import { useBlackbox } from '../useBlackbox';

test('blackbox render', () => {
    function renderThing(anchor: HTMLElement) {
        anchor.append('div');
    }
    const ThingComponent = ({ x, y }: { x: number; y: number }) => {
        const refAnchor = useBlackbox((anchor: HTMLElement) => renderThing(anchor));

        return (
            <>
                <g ref={refAnchor} transform={`translate(${x}, ${y})`} />
            </>
        );
    };

    const { container } = render(<ThingComponent x={0} y={0} />);

    expect(container).toMatchSnapshot();
});
