import TweetBox from './TweetBox.js';

export default {
    components: {
        TweetBox,
    },
    props: {
        tweets: Array,
    },
    template: `
        <div class="usertweets">
            <tweet-box v-for="tweet of tweets" :name="tweet.name" :username="tweet.username">
                {{ tweet.tweet }}
            </tweet-box>
        </div>
    `
}