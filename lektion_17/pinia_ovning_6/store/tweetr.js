import actions from './tweetr_actions.js'

const useTweetrStore = Pinia.defineStore('tweetr', {
    state: () => ({
        // hela vår apps state är en enda lista med tweets
        tweets: []
    }),
    actions
})

export default useTweetrStore
