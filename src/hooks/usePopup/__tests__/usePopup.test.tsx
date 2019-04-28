import React from 'react';
import { renderHook, cleanup, act } from 'react-hooks-testing-library';

import { usePopup } from '../usePopup';

describe('usePopup hook', () => {
    afterEach(cleanup);

    test('usePopup exists', () => {
        expect(usePopup).toBeDefined();
    });

    test('not visible by default', () => {
        const { result } = renderHook(() => usePopup());
        expect(result.current.visible).toBe(false);
    });

    test('visible if initialized with true', () => {
        const { result } = renderHook(() => usePopup(true));
        expect(result.current.visible).toBe(true);
    });

    describe('close function', () => {
        test('close function exists', () => {
            const { result } = renderHook(() => usePopup());
            expect(result.current.close).toBeDefined();
        });

        test('close action sets visibility to false', () => {
            const { result } = renderHook(() => usePopup(true));

            const { close } = result.current;

            act(() => close());

            const popup = result.current;

            expect(popup.visible).toBe(false);
        });
    });

    describe('open function', () => {
        test('open function exists', () => {
            const { result } = renderHook(() => usePopup());
            expect(result.current.open).toBeDefined();
        });

        test('open action sets visibility to true', () => {
            const { result } = renderHook(() => usePopup(false));

            const { open } = result.current;

            act(() => open());

            const popup = result.current;

            expect(popup.visible).toBe(true);
        });
    });

    describe('setVisible function', () => {
        test('setVisible function exists', () => {
            const { result } = renderHook(() => usePopup());
            expect(result.current.setVisible).toBeDefined();
        });

        test('setVisible action sets visibility to false', () => {
            const { result } = renderHook(() => usePopup(true));

            const { setVisible } = result.current;

            act(() => setVisible(false));

            const popup = result.current;

            expect(popup.visible).toBe(false);
        });

        test('setVisible action sets visibility to true', () => {
            const { result } = renderHook(() => usePopup(false));

            const { setVisible } = result.current;

            act(() => setVisible(true));

            const popup = result.current;

            expect(popup.visible).toBe(true);
        });
    });
});
