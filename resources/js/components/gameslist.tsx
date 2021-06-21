import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import "./css.css";
import * as constants from "../constants/Urls";
import LoginProps from "../types/login";
import { Game, GameList } from "../types/games";
import Header from "./header";
import { render } from "react-dom";



const GamesListPage = () => {
    const [games, setGames] = useState<GameList|null>(null);

    useEffect(() => {
        // type the res variable here when I have the time to
        axios.get(constants.serverURL + "api/games").then((res) => {
            if (res.status === 200) {
                setGames(res.data.games);
            }
        });
      }, []);

    return (
        <div>
            <Header />
            <div className="main-page">Liste des jeux : </div>
        </div>
    );
};

export default GamesListPage;
