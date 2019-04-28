import { renderHook, cleanup, act } from 'react-hooks-testing-library';

import { usePaginator } from '../usePaginator';

describe('usePaginator hook', () => {
    afterEach(cleanup);

    describe('Constructor', () => {
        test('usePaginator exists', () => {
            expect(usePaginator).toBeDefined();
        });

        test('dataLength is set', () => {
            const { result } = renderHook(() => usePaginator({ length: 10}));

            const { dataLength } = result.current;

            expect(dataLength).toEqual(10);
        });

        test('endIndex is set', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { endIndex } = result.current;

            expect(endIndex).toEqual(10);
        });
    });

    describe('setRowAmount is accurate', () => {
        test('dataLength is less than selected row amount. rowsToShow equals selected amount', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount(25));

            const { rowsToShow } = result.current;

            expect(rowsToShow).toEqual(25);
        });

        test('dataLength is less than selected row amount. startIndex equals 0', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount(25));

            const { startIndex } = result.current;

            expect(startIndex).toEqual(0);
        });

        test('dataLength is less than selected row amount. endIndex equals length of data', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount(25));

            const { endIndex } = result.current;

            expect(endIndex).toEqual(10)
        });

        test('selected row amount is all. rowsToShow equals all', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount('all'));

            const { rowsToShow } = result.current;

            expect(rowsToShow).toEqual('all');
        });

        test('selected row amount is all. startIndex equals 0', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount('all'));

            const { startIndex } = result.current;

            expect(startIndex).toEqual(0);
        });

        test('selected row amount is all. endIndex equals data length', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount('all'));

            const { endIndex } = result.current;

            expect(endIndex).toEqual(10)
        });

        test('endIndex is less than or equal to data length. rowsToShow equals selected amount', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount(5));

            const { rowsToShow } = result.current;

            expect(rowsToShow).toEqual(5);
        });

        test('endIndex is less than or equal to data length. endIndex equals selected amount', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount(5));

            const { endIndex } = result.current;

            expect(endIndex).toEqual(5);
        });

        test('endIndex is less than or equal to data length. startIndex equals 0', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { setRowAmount } = result.current;

            act(() => setRowAmount(5));

            const { startIndex } = result.current;

            expect(startIndex).toEqual(0);
        });
    });

    describe('nextPage', () => {
        test('is allowed', () => {
            const { result } = renderHook(() => usePaginator({ length: 20 }));

            const { isNextPgAllowed } = result.current;

            expect(isNextPgAllowed()).toEqual(true);
        });

        test('is not allowed', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { isNextPgAllowed } = result.current;

            expect(isNextPgAllowed()).toEqual(false);
        });

        test('startIndex updates. endIndex + rowsToShow is greater than data length', () => {
            const { result } = renderHook(() => usePaginator({ length: 14 }));

            const { nextPage } = result.current;

            act(() => nextPage());
            const { startIndex } = result.current;

            expect(startIndex).toEqual(10);
        });

        test('endIndex updates. endIndex + rowsToShow is greater than data length', () => {
            const { result } = renderHook(() => usePaginator({ length: 14 }));

            const { nextPage } = result.current;

            act(() => nextPage());
            const { endIndex } = result.current;

            expect(endIndex).toEqual(14);
        });
    });

    describe('prevPage', () => {
        test('is allowed', () => {
            const { result } = renderHook(() => usePaginator({ length: 20 }));

            const { nextPage } = result.current;
            act(() => nextPage());

            const { isPrevPgAllowed } = result.current;

            expect(isPrevPgAllowed()).toEqual(true);
        });

        test('is not allowed', () => {
            const { result } = renderHook(() => usePaginator({ length: 10 }));

            const { isPrevPgAllowed } = result.current;

            expect(isPrevPgAllowed()).toEqual(false);
        });

        test('startIndex updates. startIndex - rowsToShow is less than 0', () => {
            const { result } = renderHook(() => usePaginator({ length: 20 }));

            const { nextPage, prevPage } = result.current;
            act(() => nextPage());
            act(() => prevPage());

            const { startIndex } = result.current;

            expect(startIndex).toEqual(0);
        });

        test('endIndex updates. startIndex - rowsToShow is less than 0', () => {
            const { result } = renderHook(() => usePaginator({ length: 20 }));

            const { nextPage, prevPage } = result.current;
            act(() => nextPage());
            act(() => prevPage());

            const { endIndex } = result.current;

            expect(endIndex).toEqual(10);
        });
    })
})
