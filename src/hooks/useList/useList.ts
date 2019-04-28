import { useState } from 'react';

/**
 * Custom react hook implementing a [list data structure](https://en.wikipedia.org/wiki/List_(abstract_data_type)).
 * Use to manage, sort, and filter a dataset.
 * 
 * @param initial an initial dataset of type T
 */
export const useList = <T>(initial: T[]) => {
    const [list, set] = useState(initial);

    /**
     * Is the list empty?
     * 
     * @return true or false
     */
    const isEmpty = () => list.length === 0;

    /**
     * Get the first value of the list
     */
    const first = () => list[0];

    /**
     * Get the last value of the list
     */
    const last = () => list[list.length - 1];

    /**
     * Reset the list to the initial array provided
     * 
     */
    const reset = () => set(initial);

    /**
     * Add new values of type T to the list
     * 
     * @param values the value or values to be added to the list
     */
    const push = (value: T | T[]) => {
        if(value instanceof Array) {
            set((prev) => [...prev, ...value]);
        } else {
            set((prev) => [...prev, value]);
        }
    }

    /**
     * Sort the data stored in the list
     *
     * @param comparator a function that compares two values
     * @see [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
     */
    const sort = (comparator?: <T>(a: T, b: T) => number) =>
        set((prev) => [...prev.sort(comparator)]);

    /**
     * Filter the data stored in the list
     *
     * @param filterCallback a callback with filter logic
     * @see [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     */
    const filter = (filterCallback: (value: any, index: number, array: any[]) => any) =>
        set((prev) => prev.filter(filterCallback));

    /**
     * useList public api
     */
    return {
        list,
        set,
        isEmpty,
        first,
        last,
        reset,
        push,
        sort,
        filter,
    };
};
