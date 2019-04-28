import * as React from 'react';
import { useRef } from 'react';

/**
 * Blackbox container heavily inspired by Swizec Teller's teachings and [lib](https://github.com/Swizec/d3blackbox).
 * 
 * @param render a render prop that provides a ref you can bind to d3 with
 */
export const useBlackbox = function(render: (ref: HTMLElement) => void) {
    const refAnchor = React.useRef(null);

    React.useEffect(() => {
        render(refAnchor.current);
    });

    return refAnchor;
};
