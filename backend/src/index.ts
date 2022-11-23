import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import db from "./utils/database";

import gameRoutes from "./game/game.routes";
import roomRoutes from "./room/room.routes";
import userRoutes from "./user/user.routes";



(async () => {
    try {
        console.log(process.env.DB_HOST)
        await db.authenticate();
        await db.sync();
        console.log("Database connected");

        console.log("Database connection established");
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
})();

const app = express();

app.use(cors());

app.use(express.json());
console.log(process.env.DB_HOST);

const PORT = 4000;

app.get("/api", (_req, res) => {
    res.send("Hello World!");
});

import { uploadGames } from "./game/game.services";

uploadGames();

app.use("/api/game", gameRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/user", userRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


