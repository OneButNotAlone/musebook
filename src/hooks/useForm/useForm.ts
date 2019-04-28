import { useState } from 'react';

export interface FormValues {
    // name of field and it's value
    [name: string]: string;
}

/**
 * React hook to handle general form values
 * @param initialFormValues
 *
 * @return {FormValues} form - The current form values
 * @return setField - Function to set a new form value
 * @return clear - Function to clear all form values
 * @return reset - Function to reset values to the initial form values
 */
export const useForm = (initialFormValues: FormValues) => {
    const [initialForm] = useState<FormValues>(initialFormValues);
    const [form, setForm] = useState<FormValues>(initialForm);

    /**
     * Deletes a field from form state
     *
     * @param name - name of the field to delete
     */
    const deleteField = (name: string) => {
        const newForm = form;
        delete newForm[name];
        setForm(newForm);
    };

    /**
     * Sets a form field value in state
     *
     * @param name - name of the field to modify in state
     * @param value - value to set on the field property
     */
    const setField = (name: string, value: string) => {
        // If name given but value is empty, delete the field
        if (name && value === '') {
            deleteField(name);
            return; // Nothing more to do.  do_nothing();
        }

        setForm({
            ...form,
            [name]: value
        });
    };

    /**
     * Form will be empty
     */
    const clear = () => {
        setForm({});
    };

    /**
     * Form will be set to it's initial values
     */
    const reset = () => {
        setForm(initialForm);
    };

    return { deleteField, form, setField, clear, reset };
};

export default useForm;
