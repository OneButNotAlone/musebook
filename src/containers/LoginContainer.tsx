import * as React from 'react';
import { Container } from 'constate';
import { login } from '../api';

export interface State {
    loggedIn: boolean;
    input: InputValues;
    response: any;
    isError?: boolean;
    requestError?: string; 
}

export interface InputValues {
    username: string;
    password: string;
}

export const initialState: State = {
    loggedIn: false,
    input: null,
    response: {},
    requestError: ""
}

export interface Effects {
    login: (data: InputValues) => any;
}

export const effects: Effects = {
    login: (data: InputValues) => async ({setState}: {state: State; setState: any}): Promise<any> => {
        try {
            await login(data)
            .then((response: any) => {
                response ? (setState((state: State) => ({ ...state, response: { ...state.response, data: response } })))
                        : (setState((state: State) => ({ ...state, response: { ...state.response, data: {} }, requestError: '' })));
            })
            .catch((error) => (setState((state: State) => 
                ({...state, isError: true, requestError: 'There was an issue reaching the authentication service'}), 
                () => console.debug('There was an issue reaching the authentication service: ', error.message))))
        }
        catch(e) {
            console.log('There was an error authenticating user: ' + data.username, e);
        }
    }
}

export type LoginRenderProps = Effects & State;

export const LoginContainer = (props: any) => {
    return <Container initialState={initialState} effects={effects} {...props} />;
};

export default LoginContainer;
