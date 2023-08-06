import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "shortener_db",
  models: [__dirname + "/models"], // path to your models
});
