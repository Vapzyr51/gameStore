import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import "./css.css";
import * as constants from "../constants/Urls";
import LoginProps from "../types/login";
import Header from "./header";

const AfterSubscriptionPage = () => {
    return (
        <div>
            <div className="main-page">
                Bienvenue ! Votre compte a bien été créé ! Un e-mail vous a été
                envoyé à l'adresse renseignée pour confirmer votre compte !
            </div>
        </div>
    );
};

export default AfterSubscriptionPage;
