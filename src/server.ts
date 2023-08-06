import express, { Request, Response } from "express";
import { sequelize } from "./sequelize";
import { createCacheClient } from "./redis";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, GET request!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Hello, POST request!");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

createCacheClient()
  .then(async (client) => {
    console.log("Connection to redis has been established successfully.");

    await client.set("key", "value");
    console.log(await client.get("key"));
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
