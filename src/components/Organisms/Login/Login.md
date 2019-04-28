# Login

The `Login` component is used to capture user credentials, run them against an authentication service and either grant or reject access to an application.

A Login Container is used to abstract state away from the Login component itself so the `login`, `error` effects can be passed into any children, if needed.

```jsx
<Login />
```

```jsx
import LoginContainer, { LoginRenderProps } from '../../../containers/LoginContainer';
import Login from './Login';


<LoginContainer>
    {({login, requestError }: LoginRenderProps) => (
        <Login
            onLogin={login}
            requestError={requestError}
        />
    )}
</LoginContainer>
```
