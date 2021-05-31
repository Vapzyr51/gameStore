import React, { useState } from "react";


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
            age: 24,
        },
        {
            name: "Lilly",
            age: 2,
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
                            {game.categories}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
