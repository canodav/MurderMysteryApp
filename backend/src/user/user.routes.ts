import express  from "express";
const router = express.Router();

import { createUser, getUser, getUsers, updateUser, deleteUser } from "./user.controller";

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);


export default router;