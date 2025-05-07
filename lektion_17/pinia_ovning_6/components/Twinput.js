// Vi sparar alla tweets som klassen Tweet så vi får importera den
import useTweetrStore from '../store/tweetr.js'
import Tweet from '../data/Tweet.js'

export default {
    name: 'Twinput',
    data() {
        return {
            tweet: '', // kopplad till vår textarea med v-model
            user: ''   // kopplad till vår input med v-model
        }
    },
    methods: {
        ...Pinia.mapActions(useTweetrStore, ['addTweet']),
        sendTweet() {
            // skapa vårt tweet-objekt och lägg till det
            // i vårt state med hjälp av commit
            // anropar mutationen "tweet(state, tweet)"
            let tweet = new Tweet(this.user, this.tweet)
            this.tweet = this.user = ''
            this.addTweet(tweet)
        }
    },
    template: `<div style="display: flex; flex-direction: column;">
                <label>User: 
                    <input type="text" v-model="user" style="width: 100%;">
                </label>
                <label>Tweet: <br>
                    <textarea v-model="tweet" style="width: 100%"></textarea>
                </label>
                <!-- disabled kommer finnas med som attribut när 
                     det booleanska uttrycket är sant. Dvs. man kan inte
                     klicka på Skicka innan man fyllt i användare och en tweet -->
                <input type="button" value="Skicka" @click="sendTweet" 
                       :disabled="user.length < 1 || tweet.length < 1">
               </div>`
}