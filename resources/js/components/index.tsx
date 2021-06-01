import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';

export interface ICategory {
    name: string;
    id: number;
};

export interface IGame {
    name: string;
    categories: Array<ICategory>;
};
const App = () => {
    
    const [games, setGames] = useState<IGame[]>([
        {
            name: "Loic",
            categories: [{ name: "o", id: 24 }],
        },
        {
            name: "Lilly",
            categories: [{ name: "", id: 24 }],
        },
    ]);
    return (
        <div>
            <h1>Users list</h1>
            <ul>
                {games.map((game: IGame) => {
                    return (
                        <li key={game.name}>
                            {game.name}
                         
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
