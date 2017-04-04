import * as fs from 'fs';
import * as Twitter from 'twitter';

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

client.get('statuses/user_timeline', { count: 200, screen_name: 'realDonaldTrump' }, (readError, tweets) => {
  if (readError) {
    throw new Error(JSON.stringify(readError));
  }

  fs.writeFile('./src/app/twitter.service.data.json', JSON.stringify(tweets), (writeError) => {
    if (writeError) {
      throw writeError;
    }

    console.log('src/app/twitter.service.data.json was updated.');
  });
});
