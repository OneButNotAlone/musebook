import React from 'react';
import { renderHook, cleanup, act } from 'react-hooks-testing-library';

import { useForm } from '../useForm';

describe('useForm hook', () => {
    let initialFormData = {};

    beforeEach(() => {
        initialFormData = { field1: 'one', field2: 'two' };
    });

    afterEach(cleanup);

    test('useForm exists', () => {
        expect(useForm).toBeDefined();
    });

    test('initial values are set appropriately', () => {
        const { result } = renderHook(() => useForm(initialFormData));
        expect(result.current.form).toEqual(initialFormData);
    });

    test('setField changes a form field value', () => {
        const { result } = renderHook(() => useForm(initialFormData));

        const { setField } = result.current;

        act(() => setField('field1', 'value changed'));

        const { form } = result.current;

        expect(form).toEqual({ field1: 'value changed', field2: 'two' });
    });

    test('setField removes a field if value is empty', () => {
        const { result } = renderHook(() => useForm(initialFormData));

        const { setField } = result.current;

        act(() => setField('field1', ''));

        const { form } = result.current;

        expect(form).toEqual({ field2: 'two' });
    });

    test('deleteField removes the given field property', () => {
        const { result } = renderHook(() => useForm(initialFormData));

        const { deleteField } = result.current;

        act(() => deleteField('field1'));

        const { form } = result.current;

        expect(form).toEqual({ field2: 'two' });
    });

    test('resetting values are the same as initial values', () => {
        const { result } = renderHook(() => useForm(initialFormData));

        const { setField, reset } = result.current;

        act(() => setField('field1', 'value changed'));
        act(() => reset());

        const { form } = result.current;

        expect(form).toEqual(initialFormData);
    });

    test('clear removes all object values', () => {
        const { result } = renderHook(() => useForm(initialFormData));

        const { clear } = result.current;

        act(() => clear());

        const { form } = result.current;

        expect(form).toEqual({});
    });
});
