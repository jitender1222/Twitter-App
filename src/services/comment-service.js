import TweetRepository from "../repository/tweet-repository.js";
import CommentRepository from "../repository/comment-repository.js";

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async create(modelId, modelType, userId, content) {
    console.log("slnwkdnk", modelId, modelType, userId, content);
    if (modelType == "Tweet") {
      var commentable = await this.tweetRepository.get(modelId);
    } else if (modelType == "Comment") {
      var commentable = await this.commentRepository.get(modelId);
    } else {
      throw new Error("unknown model Type");
    }
    const comment = await this.CommentRepository.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });

    commentable.comments.push(comment);
    await commentable.save();

    return comment;
  }
}

export default CommentService;
