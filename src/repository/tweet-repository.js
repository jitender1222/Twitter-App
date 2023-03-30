import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      tweet.save();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getCommentId(id) {
    try {
      const tweet = await Tweet.findById(id).populate("comment");
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async find(id) {
    try {
      const tweet = await Tweet.findById(id).populate({
        path: "likes",
      });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
