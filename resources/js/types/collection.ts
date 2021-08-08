import { Game } from "./games";

export interface Collection {
    games: Array<LikedGame>,
};

export interface LikedGame extends Game {
    rating: number,
    notes: string,
    liked_date: Date,
};