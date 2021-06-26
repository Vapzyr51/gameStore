import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import "./css.css";
import * as constants from "../constants/Urls";
import LoginProps from "../types/login";
import { Game, GameList } from "../types/games";
import Header from "./header";
import Table from "./assets/table";

const GamesListPage = () => {
    const [games, setGames] = useState<GameList | null>(null);

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
            <div className="main-title">Liste des jeux :</div>
            <div className="main-page">
                <div className="centered-div">
                <Table
                    columns={[
                        { title: "Nom", field: "name" },
                        { title: "Studio", field: "studio" },
                        {
                            title: "Année de publication",
                            field: "release_date",
                            // type: "numeric",
                        },
                        {
                            title: "Catégories",
                            field: "categories",
                        },
                    ]}
                    data={[
                        {
                            name: "Dragonica",
                            studio: "Gpotato",
                            release_date: 1987,
                            categories: 63,
                        },
                    ]}
                    title="Liste des jeux publiés"
                />
                </div>
            </div>
        </div>
    );
};

export default GamesListPage;
