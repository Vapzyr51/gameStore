export interface Game {
    id: number,
    name: string,
    release_date: Date,
};

export interface GameList {
    games: Array<Game>,
};