import { Sequelize } from "sequelize";
console.log("Database connection established");

const db = new Sequelize(
    process.env.DB_NAME ? process.env.DB_NAME : "",
    process.env.DB_USER ? process.env.DB_USER : "",
    process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "",
    {
        host: process.env.DB_HOST ? process.env.DB_HOST : "",
        dialect: "mysql",
    }
);

export default db;
