import React, { useState } from "react";
import axios from "axios";
//import "./css.css";
import * as constants from "../constants/Urls";

const Login = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isSignUpMenu, setIsSignUpMenu] = useState<boolean>(false);
    function onLogIn(e: any) {
        e.prevent.default();
        const data = {
            name: name,
            password: password,
            email: email,
        };
        axios.post(constants.serverURL, []);
    }
    function onSwap(e: any) {
        setIsSignUpMenu(!isSignUpMenu);
    }
    return (
        <div className="login-page">
            <div className="login-banner">
                <div className="centered-button">
                    <div>
                        <p className="description">
                            {isSignUpMenu
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
                <form onSubmit={onLogIn}>
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
                                        placeholder="Nom"
                                    />
                                </div>
                            )}
                            <div className="form-field">
                                <input
                                    className="input-field"
                                    type="text"
                                    id="password"
                                    name="password"
                                    value={password}
                                    placeholder="Mot de passe"
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    className="input-field"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
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
export default Login;
