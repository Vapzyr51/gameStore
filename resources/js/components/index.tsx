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
import GamesListPage from "./gameslist";
import CollectionPage from "./collection";
import ProfilePage from "./profile";
import AfterSubscriptionPage from "./subscription";
import PrivateRoute from "./routing/privateroute";

const App = () => {
    const isLogin = useAppSelector((state) => state.auth.logged_in);
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                {/*  */}
                <PrivateRoute isAuthenticated={isLogin} authenticationPath="/login" path="/about" exact>
                    <></>
                </PrivateRoute>
                <PrivateRoute isAuthenticated={isLogin} authenticationPath="/login" path="/home" exact>
                    <HomePage />
                </PrivateRoute>
                <PrivateRoute isAuthenticated={isLogin}  authenticationPath="/login" path="/subscription-success" exact>
                    <AfterSubscriptionPage />
                </PrivateRoute>
                <PrivateRoute isAuthenticated={isLogin}  authenticationPath="/login" path="/games" exact>
                    <GamesListPage />
                </PrivateRoute>
                <PrivateRoute isAuthenticated={isLogin}  authenticationPath="/login" path="/collection" exact>
                    <CollectionPage />
                </PrivateRoute>
                <PrivateRoute isAuthenticated={isLogin}  authenticationPath="/login" path="/profile" exact>
                    <ProfilePage />
                </PrivateRoute>
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
