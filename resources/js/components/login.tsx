import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import "./css.css";
import * as constants from "../constants/Urls";
import LoginProps from "../types/login";
import { useAppDispatch } from './hooks';

const LoginPage: React.FunctionComponent<LoginProps> = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isSignUpMenu, setIsSignUpMenu] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    let history = useHistory();

    function onLogIn(e: any) {
        e.preventDefault();

        //initialize CRSF protection for token
        axios.get("/sanctum/csrf-cookie").then((response) => {
            // Login...
            let formdata = new FormData();
            formdata.append("password", password);
            formdata.append("email", email);
            axios.post(constants.serverURL + "login", formdata).then((res) => {
                if (res.status === 200) {
                    dispatch({ type: 'auth/login'});
                    history.push("/home");
                }
            });
        });
    }

    function onSubscribe(e: any) {
        e.preventDefault();
        // Subscription...
        let formdata = new FormData();
        formdata.append("username", name);
        formdata.append("password", password);
        formdata.append("email", email);
        axios.post(constants.serverURL + "register", formdata).then((res) => {
            if (res.status === 200) {
                history.push("/subscription-success");
            }
        });
    }

    function onSwap(e: any) {
        setIsSignUpMenu(!isSignUpMenu);
    }

    function onInputChange(event: any, field: string) {
        const value = !(event && event.target && event.target.value)
            ? ""
            : event.target.value;
        if (field === "name") {
            setName(value);
        } else if (field === "password") {
            setPassword(value);
        } else {
            setEmail(value);
        }
    }

    return (
        <div className="login-page">
            <div className="login-banner">
                <div className="centered-button">
                    <div>
                        <p className="description">
                            {!isSignUpMenu
                                ? " Vous n'avez pas encore de compte ?"
                                : "Vous avez déjà un compte ?"}
                        </p>
                        <button onClick={onSwap}>
                            {isSignUpMenu ? "Se connecter" : "S'inscrire"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="login-section">
                <form onSubmit={!isSignUpMenu ? onLogIn : onSubscribe}>
                    <div className="centered-form">
                        <div className="login-form">
                            <div className="form-field">
                                <p className="title">
                                    {isSignUpMenu
                                        ? "Inscrivez-vous pour rejoindre la communauté !"
                                        : "Connectez-vous pour rejoindre la communauté !"}
                                </p>
                            </div>
                            {isSignUpMenu && (
                                <div className="form-field">
                                    <input
                                        className="input-field"
                                        type="text"
                                        id="name"
                                        name="acc_name"
                                        value={name}
                                        onChange={(event) => {
                                            onInputChange(event, "name");
                                        }}
                                        placeholder="Nom"
                                    />
                                </div>
                            )}
                            <div className="form-field">
                                <input
                                    className="input-field"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(event) =>
                                        onInputChange(event, "email")
                                    }
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    className="input-field"
                                    type="text"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(event) =>
                                        onInputChange(event, "password")
                                    }
                                    placeholder="Mot de passe"
                                />
                            </div>
                            <div className="form-field">
                                <button
                                    className="submit-login-button"
                                    type="submit"
                                >
                                    {isSignUpMenu
                                        ? "S'inscrire"
                                        : "Se connecter"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
