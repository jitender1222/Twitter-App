# Requirements

- User should be to able create a Post

        - [The post/tweet cannot be more than 250Chars]
        - [Every post/tweet will be having support for image upload]

- Any Post should be visible to all those users who follow the author

- Anyone who follows you can comment on a post/tweet

- Anyone who follows you can like on a post/tweet

- we can comment on a commnet

- we can like any comment

- we can retweet also

- User Profile

  - Name
  - Follower Count
  - Bio
  - Last 10 tweets from the user

- Pagination on tweets

- User Auth

## Screenshots

Here we are making the Tweet and a Hashtags Schema which are responsible to store the Tweets and a Hashtags.

Inside the Tweet Schema if a User writes a `Tweet` including the `HashTags` we have to first extract that `hashtag` and store it into the Hashtag schema.

![](/screenshots/Screenshot%202023-03-28%20083901.png)

## `Updated Model with Like Schema`

Here we are defining a like model by which the user has the authority that it can either like it on a Tweet or on a Comment.

![](/screenshots/Screenshot%202023-04-03%20121110.png)
