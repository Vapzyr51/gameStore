import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import "./css.css";
import * as constants from "../constants/Urls";
import { Collection } from "../types/collection";
import { useAppSelector } from './hooks';
import Header from "./header";

const CollectionPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [collection, setCollection] = useState<Collection | null>(null);
    const idUser = useAppSelector((state) => state.auth.id_user);

    useEffect(() => {
        // type the res variable here when I have the time to
        axios.get(constants.serverURL + "api/collection/" + idUser).then((res) => {
            if (res.status === 200) {
                setCollection(res.data.collection);
            }
        });
    }, []);

    return (
        <div>
            <Header />
            <div className="main-page">Ma collection :</div>
        </div>
    );
};

export default CollectionPage;
