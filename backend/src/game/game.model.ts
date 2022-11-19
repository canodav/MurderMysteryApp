import {  DataTypes } from "sequelize";
import db from "../utils/database";

// Create a model for the game
export const Game = db.define("game", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    num_players: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Game;