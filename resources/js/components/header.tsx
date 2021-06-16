import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="header-menu">
        <div className="header-menu-list">
            <Link className="header-menu-item" to="/games">
                Les jeux
            </Link>
            <Link className="header-menu-item" to="/games">
                Mon répertoire
            </Link>
            <Link className="header-menu-item" to="/profile">
                Mon profil
            </Link>
            <Link className="header-menu-item" to="/profile">
                Se déconnecter
            </Link>
        </div>
    </nav>
);

export default Header;
