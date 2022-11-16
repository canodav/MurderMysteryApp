import express from 'express';
import gameRoutes from './routes/game';
import { createGame } from './controllers/game';
import * as types from './types';
import story_0 from "../data/stories/0.json";
import story_1 from "../data/stories/1.json";


let stories = [story_0, story_1];

let games: Array<types.Game> = [];

const app = express();

stories.forEach(story => {
    
    games.push(createGame());

});

console.log(games);
app.use(express.json());

const PORT = 3000;

app.get('/api', (_req, res) => {
    res.send('Hello World!');
});

app.use('/api/game', gameRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
