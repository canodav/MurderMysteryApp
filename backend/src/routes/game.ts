import express from 'express';
import { createGame, getGame } from '../services/game/game';
const router = express.Router();


router.get('/', (_req, res) => {
    res.send('Game route');
})

router.get('/:id', (req, res) => {
    const game = getGame(Number(req.params.id));
    res.send(game);
})

export default router;