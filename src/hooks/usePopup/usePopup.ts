import { useState } from 'react';

/**
 * Custom React hook to manage state of a popup externally
 */
export const usePopup = (initiallyVisible: boolean = false) => {
    const [visible, setVisible] = useState(initiallyVisible);

    const close = () => {
        setVisible(false);
    };

    const open = () => {
        setVisible(true);
    };

    return { visible, setVisible, open, close };
};

export default usePopup;
