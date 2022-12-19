export interface Game {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    min_players: number;
    max_players: number;
}

export interface Character{
    id: string;
    name: string;
    description: string;
    thumbnail: string;
}


export interface Player {
    id: number
    email: string;
}


