export interface Game {
    id: number,
    name: string,
    studio: string,
    categories: Array<number>,
    release_date: Date,
};

export type GameList = Array<Game>;
