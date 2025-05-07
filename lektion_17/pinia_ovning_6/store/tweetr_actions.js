// Vi exporterar ett objekt som innehåller alla våra actions för tweetr.
// Kan vara bra att göra om man har väldigt många.
export default {
    addTweet(tweet) {
        // lägg till vårt tweet till slutet av listan av tweets
        this.tweets.push(tweet)
    }
}