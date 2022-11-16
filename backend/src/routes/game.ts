import express from 'express';
import { createGame } from '../controllers/game';
const router = express.Router();


router.get('/', (_req, res) => {
    res.send('Game route');
})

router.get('/:id', (req, res) => {

    res.send("Game id: " + req.params.id);
})

export default router;