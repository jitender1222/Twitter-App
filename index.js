import express from "express";
import { connect } from "./src/config/db.js";

const app = express();

const PORT = 3000;

import TweetService from "./src/services/tweet-service.js";

app.listen(PORT, async () => {
  console.log(`app is running at server ${PORT}`);
  await connect();
  console.log("db connected successfully");

  let ser = new TweetService();
  ser.create({ content: "Done with the #refactor ??" });
});
