import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import "./css.css";
import * as constants from "../constants/Urls";
import LoginProps from "../types/login";
import Header from "./header";

const CollectionPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div>
            <Header />
            <div className="main-page">Ma collection :</div>
        </div>
    );
};

export default CollectionPage;
