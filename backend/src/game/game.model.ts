import {  DataTypes } from "sequelize";
import db from "../utils/database";
import Character from "../character/character.model";

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
    },// TODO Add min and max players
    min_players: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    max_players: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Game.hasMany(Character, {foreignKey: {
    name: 'gameId',
    allowNull: true,
}});

export default Game;