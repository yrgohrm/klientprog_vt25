// klass för att kapsla in ett tweet
// ligger i en egen fil så den lätt kan användas på många ställen
export default class Tweet {
    constructor(user, tweet) {
        this.user = user
        this.tweet = tweet
    }
}