import express from "express";
import { toggleLike } from "../../controller/like-controller.js";

import { createTweet } from "../../controller/tweet-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);

router.post("/likes/toggle", toggleLike);

export default router;
