import { createApp } from 'vue';
import UserTweets from './components/UserTweets.js';
import TweetService from './services/TweetService.js';

const tweetsData = TweetService.get();

const app = {
    components: {
        UserTweets
    },
    data() {
        return {
            tweets: null,
        }
    },
    async created() {
        this.tweets = await tweetsData;
    }
};

const vueApp = createApp(app);
vueApp.mount("#app");
