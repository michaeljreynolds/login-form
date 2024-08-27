import { useState, useEffect, useCallback } from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import LoginInput from "./LoginInput";
import '../styles/loginForm.css';

const LoginForm = () => {

    const { storage, setStorage } = useLocalStorage();

    const [passwordsMatch, setPasswordsMatch] = useState(true); // dont show they dont match until user starts typing in the confirm password input
    const [formStates, setFormStates] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        setFormStates({
            ...storage
        });
        setPasswordsMatch(storage['confirmPassword'] !== storage['password'] ? false : true)
    }, []);

    const handleChange = (inputName, inputValue) => {
        setFormStates({
            ...formStates,
            [inputName]: inputValue
        });

        setStorage(inputName, inputValue);

        if (inputName === 'password') {
            setPasswordsMatch(formStates['confirmPassword'] !== inputValue ? false : true)
        }

        if (inputName === 'confirmPassword') {
            setPasswordsMatch(formStates['password'] !== inputValue ? false : true)
        }
    };

    return (
        <div>
            <div className="login-form-body">
                <form>
                    <LoginInput
                        inputName="username"
                        label="Username"
                        inputValue={formStates.username}
                        type="text"
                        changeCB={handleChange}
                        autoFocus={true}
                    />

                    <LoginInput
                        inputName="password"
                        label="Password"
                        inputValue={formStates.password}
                        type="password"
                        changeCB={handleChange}
                        hasError={!passwordsMatch}
                    />

                    <LoginInput
                        inputName="confirmPassword"
                        label="Confirm Password"
                        inputValue={formStates.confirmPassword}
                        type="password"
                        changeCB={handleChange}
                        hasError={!passwordsMatch}
                    />
                </form>
            </div>
            <div className="login-form-alert">
                {!passwordsMatch && (
                    <div className="error">
                        Passwords must match!
                    </div>
                )}
            </div>
        </div>
    );
}
export default LoginForm;