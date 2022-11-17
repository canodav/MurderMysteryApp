import {  DataTypes } from "sequelize";
import db from "../utils/database";

// Create a model for the room table
export const User = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    character: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    roomId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});


export default User;