import express from "express";
import bodyParser from "body-parser";
import { connect } from "./src/config/db.js";

const app = express();

const PORT = 3000;

import apiRoutes from "./src/routes/index.js";

import userRepository from "./src/repository/user-repository.js";
import LikeService from "./src/services/like-service.js";
import TweetRepository from "./src/repository/tweet-repository.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log(`app is running at server ${PORT}`);
  await connect();
  console.log("db connected successfully");

  const userRepo = new userRepository();
  const tweetRepo = new TweetRepository();
  // const user = await userRepo.create({
  //   email: "jit@gmail.com",
  //   password: "1234",
  //   name: "jitender",
  // });

  const tweets = await tweetRepo.getAll(0, 10);
  const users = await userRepo.getAll();
  const likeService = new LikeService();
  await likeService.toggleLike(users[0].id, "Tweet", tweets[0].id);
});
