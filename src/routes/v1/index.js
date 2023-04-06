import express from "express";
import { toggleLike } from "../../controller/like-controller.js";

import { createTweet, getTweet } from "../../controller/tweet-controller.js";
import { createComment } from "../../controller/comment-controller.js";
import { logIn, signup } from "../../controller/auth-controller.js";
import { authenticate } from "../../middlewear/authenticate.js";

const router = express.Router();

router.post("/tweets", authenticate, createTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comments", authenticate, createComment);

router.get("/tweets/:id", getTweet);

router.post("/signup", signup);

router.post("/login", logIn);

export default router;
