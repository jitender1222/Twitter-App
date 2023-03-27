import Hashtag from "../models/hashtags.js";

class HashtagRepository {
  async create(data) {
    try {
      const tweet = await Hashtag.create(data);
      tweet.save();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    try {
      const tweet = await Hashtag.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  // bulk create
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
  async getCommentId(id) {
    try {
      const tweet = await Hashtag.findById(id).populate("comment");
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const tweet = await Hashtag.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(offset, limit) {
    try {
      const tweet = await Hashtag.find().limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HashtagRepository;
