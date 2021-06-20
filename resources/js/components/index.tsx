import React, { useState } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useHistory,
} from "react-router-dom";
import { useAppSelector } from './hooks';
import LoginPage from "./login";
import HomePage from "./home";
import AfterSubscriptionPage from "./subscription";

export interface ICategory {
    name: string;
    id: number;
}

export interface IGame {
    name: string;
    categories: Array<ICategory>;
}
const App = () => {
    const isLogin = useAppSelector((state) => state.auth.logged_in);
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <></>
                </Route>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/subscription-success">
                    <AfterSubscriptionPage />
                </Route>
                <Route path="*">
                    {!isLogin ? (
                        <Redirect to="/login" />
                    ) : (
                        <Redirect to="/home" />
                    )}
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
