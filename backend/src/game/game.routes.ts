import express from 'express';
import { createGame } from './game.controller';
const router = express.Router();


router.post('/', createGame)

router.get('/:id', (req, res) => {
    console.log("Game id: " + req.params.id);
    res.send("Game id: " + req.params.id);
})

export default router;