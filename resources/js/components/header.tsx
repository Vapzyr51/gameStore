import React, { useCallback } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch } from './hooks';
import * as constants from "../constants/Urls";

const Header = () => {
    let history = useHistory();
    const dispatch = useAppDispatch();
    function logout() {
        //dispatching Logout action and redirecting...
        axios.post(constants.serverURL + "logout").then((res) => {
            if (res.status === 200) {
                dispatch({type : 'auth/logout'});
                history.push("/logout");
            }
        });
    }

    return (
        <nav className="header-menu">
            <div className="header-menu-list">
                <Link className="header-menu-item" to="/games">
                    Les jeux
                </Link>
                <Link className="header-menu-item" to="/collection">
                    Mon répertoire
                </Link>
                <Link className="header-menu-item" to="/profile">
                    Mon profil
                </Link>
                <a className="header-menu-item" onClick={logout}>
                    Se déconnecter
                </a>
            </div>
        </nav>
    );
};

export default Header;
