import TweetRepository from "../repository/tweet-repository.js";
import HashtagRepository from "../repository/hashtag-repository.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  // create a tweet
  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.substring(1)); // this regex extract all the # tags from the string

    // create a tweet
    const tweet = await this.tweetRepository.create(data);
    console.log("tweet", tweet);

    // create a hashtags and add it here
    let tagsAlreadyPresent = await this.hashtagRepository.findByName(tags);
    let titleOfPresentTags = tagsAlreadyPresent.map((tag) => tag.title);

    // creating new tags
    let newtags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
    newtags = newtags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });
    await this.hashtagRepository.bulkCreate(newtags);

    //  we are adding the id inside the array if the hashtags are already present
    tagsAlreadyPresent.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }
}

export default TweetService;
