import { act, renderHook, cleanup } from 'react-hooks-testing-library';

import { useList } from '../useList';

describe('useList hook', () => {
    afterEach(cleanup);

    test('useList exists', () => {
        expect(useList).toBeDefined();
    });

    describe('a constructor', () => {
        test('for creating an empty list', () => {
            const { result } = renderHook(() => useList([]));

            const { list } = result.current;

            expect(list).toEqual([]);
        });

        test('for creating a list with initial values of type T', () => {
            const { result } = renderHook(() => useList<{ name: string }>([{ name: 'coolname' }]));

            const { list } = result.current;

            expect(list).toEqual([{ name: 'coolname' }]);
        });
    });

    describe('an operation', () => {
        describe('for reseting a list to the initial value provided', () => {
            test('reset exists', () => {
                const { result } = renderHook(() =>
                    useList<{ name: string }>([{ name: 'coolname' }])
                );

                const { reset } = result.current;

                expect(reset).toBeDefined();
            });

            test('initial value is reset', () => {
                const { result } = renderHook(() =>
                    useList<{ name: string }>([{ name: 'coolname' }])
                );

                const { list, reset, push } = result.current;

                act(() => push({ name: 'holiday' }));

                act(() => reset());

                expect(list).toEqual([{ name: 'coolname' }]);
            });
        });

        describe('for testing whether or not a list is empty', () => {
            test('isEmpty exists', () => {
                const { result } = renderHook(() =>
                    useList<{ name: string }>([{ name: 'coolname' }])
                );

                const { isEmpty } = result.current;

                expect(isEmpty).toBeDefined();

                expect(isEmpty()).toBe(false);
            });

            test('handles an empty list', () => {
                const { result } = renderHook(() => useList<{ name: string }>([]));

                const { isEmpty } = result.current;

                expect(isEmpty()).toBe(true);
            });

            test('handles an list with items', () => {
                const { result } = renderHook(() =>
                    useList<{ name: string }>([{ name: 'coolname' }])
                );

                const { isEmpty } = result.current;

                expect(isEmpty()).toBe(false);
            });
        });

        test.todo('for prepending an entity to a list');

        test('for appending an entity to a list', () => {
            const { result } = renderHook(() => useList<{ name: string }>([{ name: 'coolname' }]));

            const { push } = result.current;

            act(() => push({ name: 'holiday' }));

            const { list } = result.current;

            expect(list).toEqual([{ name: 'coolname' }, { name: 'holiday' }]);
        });

        test('for appending an array of entities to a list', () => {
            const { result } = renderHook(() => useList<{ name: string }>([{ name: 'coolname' }]));

            const { push } = result.current;

            act(() => push([{ name: 'holiday' }, { name: 'vacation' }]));

            const { list } = result.current;

            expect(list).toEqual([{ name: 'coolname' }, { name: 'holiday' }, { name: 'vacation' }]);
        });

        describe('for determining the first component (or the "head") of a list', () => {
            test('first exists', () => {
                const { result } = renderHook(() => useList([]));

                const { first } = result.current;

                expect(first).toBeDefined();
            });

            test('first value is correct', () => {
                const { result } = renderHook(() =>
                    useList<{ name: string }>([{ name: 'coolname' }, { name: 'holiday' }])
                );

                const { first } = result.current;

                expect(first()).toEqual({ name: 'coolname' });
            });
        });

        describe('for referring to the list consisting of all the components of a list except for its first (this is called the "tail" of the list.)', () => {
            test('last exists', () => {
                const { result } = renderHook(() => useList([]));

                const { last } = result.current;

                expect(last).toBeDefined();
            });

            test('last value is correct', () => {
                const { result } = renderHook(() =>
                    useList<{ name: string }>([{ name: 'coolname' }, { name: 'holiday' }])
                );

                const { last } = result.current;

                expect(last()).toEqual({ name: 'holiday' });
            });
        });

        describe('for sorting the list', () => {
            test('sort exists', () => {
                const { result } = renderHook(() => useList([]));

                const { sort } = result.current;

                expect(sort).toBeDefined();
            });

            test.todo('accepts a comparator function');

            test('sets the new sorted values', () => {
                const { result } = renderHook(() => useList([]));

                const { sort } = result.current;

                act(() => {
                    sort();
                });

                const { list } = result.current;

                expect(list).toEqual([]);
            });
        });

        describe('for filtering the list)', () => {
            test('filter exists', () => {
                const { result } = renderHook(() => useList([]));

                const { filter } = result.current;

                expect(filter).toBeDefined();
            });

            test.todo('accepts a filter callback function');

            test('sets the new filtered values', () => {
                const { result } = renderHook(() =>
                    useList([
                        { name: 'coolname bro' },
                        { name: 'holiday' },
                        { name: 'beta' },
                        { name: 'alpha' }
                    ])
                );

                const { filter } = result.current;

                act(() => {
                    filter((value: { name: string }) => {
                        return value.name.includes('b');
                    });
                });

                const { list } = result.current;

                expect(list).toEqual([{ name: 'coolname bro' }, { name: 'beta' }]);
            });
        });
    });
});
