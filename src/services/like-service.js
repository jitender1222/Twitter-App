import TweetRepository from "../repository/tweet-repository.js";
import LikeRepository from "../repository/like-repository.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(userId, modelType, modelId) {
    //api/v1/likes/toggle?id=modelid&type==tweet
    if (modelType === "Tweet") {
      var likeable = await this.tweetRepository.find(modelId);
      console.log("likebake", likeable);
    } else if (modelType === "Comment") {
      // var commentable = this.TweetRepository.get(modelId).populate();
    } else {
      throw new Error("Unkown model type");
    }

    const exists = await this.likeRepository.findByUserAndLikeAble({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    if (exists) {
      // console.log("exists", exists);
      likeable.likes.pull(exists.id);
      await likeable.save();
      await exists.deleteOne();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}

export default LikeService;
