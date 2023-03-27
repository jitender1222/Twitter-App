import express from "express";
import bodyParser from "body-parser";
import { connect } from "./src/config/db.js";

const app = express();

const PORT = 3000;

import apiRoutes from "./src/routes/index.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`app is running at server ${PORT}`);
  await connect();
  console.log("db connected successfully");
});
