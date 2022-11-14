export interface Game{
    id: number,
    players: Array<User>,
    description: string,
    act: Act,
}


export interface User{
    id: number,
    name: string,
    id_admin: boolean
}


export interface Act{
    id: number,
    actNumber: number,
    playerStories: Array<CharacterStory>,
}

export interface Character{
    id: number,
    player: User,
    name: string,
    description: string,
    characterIntroductionStory: CharacterStory,
}

export interface CharacterStory{
    id: number,
    character: Character,
    story: string,
    extraInfo: string,
}