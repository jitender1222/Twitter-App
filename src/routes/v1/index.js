import express from "express";
import { toggleLike } from "../../controller/like-controller.js";

import { createTweet, getTweet } from "../../controller/tweet-controller.js";
import { createComment } from "../../controller/comment-controller.js";
import { signup } from "../../controller/auth-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comments", createComment);

router.get("/tweets/:id", getTweet);

router.post("/signup", signup);

export default router;
