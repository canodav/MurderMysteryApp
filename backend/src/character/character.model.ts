

import {  DataTypes } from "sequelize";
import db from "../utils/database";

// Create a model for the room table
export const Character = db.define("character", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    characterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    important: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    characterIntroductionStory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    indexes: [
        {
            unique: true,
            fields: ['characterId', 'gameId']
        }
    ]
});

export default Character;