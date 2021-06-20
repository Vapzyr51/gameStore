import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch } from './hooks';

const Header = () => {
    let history = useHistory();
    const dispatch = useAppDispatch();
    function logout() {
        dispatch({type : 'auth/logout'});
        history.push("/logout");
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
