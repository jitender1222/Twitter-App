import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock("../../src/models/tweet.js");

describe("testing the tweet", () => {
  test("should created a new tweet and return its value", async () => {
    const data = {
      content: "Testing Tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data };
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);

    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
  });

  test("should not create a tweet throws an error", async () => {
    const data = {
      content: "Testing Tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("Something went wrong");
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Something went wrong");
    });
  });
});

describe("get all tweets", () => {
  test("to get all the tweets", async () => {
    const data = {
      content: "Testing Tweet",
    };

    const tweetsArray = [{ ...data }, { ...data }, { ...data }];
    const tweets = { tweetsArray };

    tweets.skip = jest.fn((offset) => tweets);
    tweets.limit = jest.fn((limit) => tweets.tweetsArray.slice(0, limit));

    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return tweets;
    });

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.getAll(0, 3);

    expect(spy).toHaveBeenCalled();
    expect(tweet).toHaveLength(3);
  });
});
