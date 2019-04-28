import * as React from 'react';
import { storiesOf } from '@storybook/react';

import LoginContainer, { LoginRenderProps } from '../../../containers/LoginContainer';
import { Provider } from 'constate';

import Login from './Login';

import * as LoginMarkdown from './Login.md';

storiesOf('Login', module)
    .addDecorator((story) => <Provider>{story()}</Provider>)
    .add('standard login', () => (
        <>
            <LoginContainer >
                {({ login, requestError }: LoginRenderProps) => (

                    <Login onLogin={login} requestError={requestError.length > 0 ? requestError : ''} />
                )}
            </LoginContainer>
        </>
    ), { notes: LoginMarkdown })
    .add('with request error', () => (
        <>

            <Login onLogin={() => console.log('yooo')} requestError="My request Error" />

        </>
    ), { notes: LoginMarkdown })
    .add('without request error', () => (
        <>

            <Login onLogin={() => console.log('yooo')} requestError="" />

        </>
    ), { notes: LoginMarkdown });
