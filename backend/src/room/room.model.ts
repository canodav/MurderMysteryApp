import {  DataTypes } from "sequelize";
import db from "../utils/database";
import User from "../user/user.model";

// Create a model for the room table
export const Room = db.define("room", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    game: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    currentAct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    secretKey: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});



Room.hasMany(User, {foreignKey: {
    name: 'roomId',
    allowNull: true,
}});

export default Room;

