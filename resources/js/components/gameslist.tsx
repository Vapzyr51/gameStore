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
    const [games, setGames] = useState<GameList>([]);
    const [page, setPage ] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);

    function onChangePage(nextPage: number, pageSize: number) {
        axios.get(constants.serverURL + "api/games" + "?page=" + nextPage).then((res) => {
            if (res.status === 200) {
                if (res.data && res.data.data) {
                    setGames(res.data.data);
                    setPage(res.data.current_page);
                }
            }
        });
    }

    useEffect(() => {
        // type the res variable here when I have the time to
        axios.get(constants.serverURL + "api/games").then((res) => {
            if (res.status === 200) {
                if (res.data && res.data.data) {
                    setGames(res.data.data);
                    setPage(res.data.current_page);
                    setTotalCount(res.data.total);
                }
                console.log(res.data.games, res);
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
                    data={games}
                    title="Liste des jeux publiés"
                    page={page}
                    totalCount={totalCount}
                    onChangePage={onChangePage}
                />
                </div>
            </div>
        </div>
    );
};

export default GamesListPage;
