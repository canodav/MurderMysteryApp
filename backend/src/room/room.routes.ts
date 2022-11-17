import express from 'express';
import { createRoom, getRoom } from './room.controller';
const router = express.Router();


router.post('/', createRoom)

router.get('/:id', getRoom)

export default router;