import { Fact } from "./fact.interface";

export const createFact = (shortText: string, text: string, privateFact: boolean) : Fact => {
    return {
        shortText,
        text,
        privateFact
    }
}