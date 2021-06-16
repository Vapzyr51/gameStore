import React, { useState } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import LoginPage from "./login";
import HomePage from "./home";

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
            <Switch>
                <Route path="/about">
                    <></>
                </Route>
                <Route path="/index">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <></>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
