import * as React from 'react';
import styled from 'styled-components';
import LoginLogo from '../../Images/LoginLogo';
import SampleappTxt from '../../Images/SampleappTxt';
import { InputValues } from 'containers/LoginContainer';
import { LoginInput } from '../../Atoms/Inputs';
import Button from '../../Atoms/Button';
import { Popup } from '../../Molecules/Dialogs/Popup';
import { Loader } from '../../Atoms/Loader';


export const BackgroundGradient = styled.div`
    background: linear-gradient(135deg, #0CB0F3 0%, #116CAE 51%, #0A4E8C 100%);
    width: 100vw;
    height: 50vh;
`;

export const LoadingBkg = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.5);
    text-align: center;
`;

export const AppLogo = styled.div`
    position: relative;
    margin: 0 auto;
    text-align: center;
    top: 5vh;
`;

export const LoginPrompt = styled.div`
    height: 360px;
    width: 460px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: calc(50vw - 230px);
    top: calc(50vh - 180px);
`;

export const AppTxt = styled.div`
    margin-bottom: 0px;
    text-align: center;
`;

export const Error = styled.div`
    color: #bb0000;
    font-size: 14px;
    font-family: 'Bogle', sans-serif;
    float: left;
    margin-top: 0px;
`;

interface LoginProps {
    onLogin: (data: InputValues) => any;
    requestError?: string;
}

interface LoginState {
    username?: string;
    password?: string;
    usernameValid?: boolean;
    passwordValid?: boolean;
    isLoading?: boolean
    isOpen?: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameValid: true,
            passwordValid: true,
            isOpen: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    componentDidMount() {

    }

    handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value

        })
    }

    handleValidate(username: string, password: string): void {

        if (!username) {
            this.setState({
                usernameValid: false
            }, () => console.log('username empty'))
        }
        else {
            this.setState({
                usernameValid: true
            }, () => console.log('username: ', username))
        }

        if (!password) {
            this.setState({
                passwordValid: false
            }, () => console.log('password empty'))
        }
        else {
            this.setState({
                passwordValid: true
            }, () => console.log('password: ', password))
        }

    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>, cb: (data: InputValues) => void) {
        const { username, password } = this.state;
        e.preventDefault();

        this.handleValidate(username, password);

        if (username && password) {
            this.setState({
                isLoading: true
            }, () => {
                cb({ username, password });
                setTimeout(() => {
                    if (this.props.requestError.length > 0 && (this.state.usernameValid === true && this.state.passwordValid === true)) {
                        this.setState({
                            isOpen: true,
                            isLoading: false
                        })
                    }
                }, 5000)

            })
        }
    }

    closePopup() {
        this.setState({
            isOpen: false
        })
    }

    render() {

        const { onLogin, requestError } = this.props;
        const { usernameValid, passwordValid, isLoading } = this.state;

        console.log('what are you', requestError);

        return (
            <>
                <BackgroundGradient>

                    <AppLogo>
                        <LoginLogo />
                    </AppLogo>

                    <LoginPrompt>

                        <AppTxt><SampleappTxt /></AppTxt>

                        <form name="loginForm" onSubmit={(e) => { this.handleSubmit(e, onLogin) }} style={{ display: 'flex', flexDirection: 'column' }}>

                            <LoginInput type="username" name="username" placeholder="Username" onChange={this.handleInput} />
                            <Error hidden={usernameValid === true}>Username is a required field</Error>

                            <LoginInput type="password" name="password" placeholder="Password" onChange={this.handleInput} />
                            <Error hidden={passwordValid === true}>Password is a required field</Error>

                            <Button type="rounded">
                                LOGIN
                            </Button>
                        </form>

                    </LoginPrompt>

                </BackgroundGradient>

                {isLoading &&
                    <LoadingBkg>
                        <Loader style={{marginTop: 'calc(50vh - 50px)'}}/>
                    </LoadingBkg>
                }

                <Popup msg={requestError} show={this.state.isOpen} close={this.closePopup} />

            </>
        )
    }

}

export default Login;


