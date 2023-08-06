import express, { Request, Response } from "express";
import { sequelize } from "./sequelize";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, GET request!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Hello, POST request!");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
