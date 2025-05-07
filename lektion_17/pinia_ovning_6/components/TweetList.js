import useTweetrStore from '../store/tweetr.js'

// en komponent som helt enkelt loopar igenom hela listan med tweet
// och visar dem.

export default {
    name: 'TweetList',
    computed: {
        ...Pinia.mapStores(useTweetrStore),
    },
    template: `<div>
                    <div v-for="tweet in tweetrStore.tweets" style="margin: 0.5em 0; padding: 0.2em; border: 1px solid black">
                        <span style="font-weight: bold">{{tweet.user}}</span>
                        <p>{{tweet.tweet}}</p>
                    </div>
               </div>`
}