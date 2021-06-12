import React, { useState } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import Header from "./header";
import LoginPage from "./login";

export interface ICategory {
    name: string;
    id: number;
}

export interface IGame {
    name: string;
    categories: Array<ICategory>;
}
const App = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <Router>
            <div className="main-page">
                {isLogin && (
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/login">Connexion</Link>
                            </li>
                        </ul>
                    </nav>
                )}
                <Switch>
                    <Route path="/about">
                        <></>
                    </Route>
                    <Route path="/index">
                        <></>
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/">
                        <></>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
