import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello Ana!" });
});

app.listen(port, () =>
  console.log(`⚡ Servidor iniciado em http://localhost:${port}`)
);