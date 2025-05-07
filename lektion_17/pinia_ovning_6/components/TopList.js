import useTweetrStore from '../store/tweetr.js'

// funktion för att sortera användare i ordning
// efter hur många tweets de gjort
// som en comparator i Java
function userCompare(user1, user2) {
    if (user1.count < user2.count) {
        return 1;
    }
    if (user1.count > user2.count) {
        return -1;
    }
    return 0;
}

export default {
    name: 'TopList',
    computed: {
        ...Pinia.mapStores(useTweetrStore),

        // notera att detta är en computed property
        // vilket innebär att den kommer att köras
        // varje gång this.$store.state.tweets ändras
        // men så länge den variabeln inte ändras
        // kommer denna funktions värde finnas
        // sparad i en cache
        // detta sätt att göra det på vinner inga pris
        // i snabbaste implementation eftersom den kommer
        // gå jätteslött om antalet tweets blir väldigt 
        // många men den är good enough för nivån vi är på nu
        topTweeters() {
            let tweets = this.tweetrStore.tweets
            let counter = {}

            /* Vi plockar fram alla användarnamn från alla tweets.
             * Sedan skapar vi egenskaper i ett objekt som heter
             * som varje användare. Finns egenskapen så räknar vi
             * upp den. Lite som att ha en Map<String, Integer> i
             * Java.
             */
            for (const { user } of tweets) {
                if (counter[user] === undefined) {
                    counter[user] = 1
                }
                else {
                    counter[user]++
                }
            }
            
            /*
             * Här kommer vi ha ett objekt som kan se ut som t.ex:
             * {
             *     "Bosse": 3,
             *     "Kerstin": 2,
             *     "Anna": 4,
             *     "Olle": 1
             * }
             */

            // Gör om vårt objekt med egenskaper till en array av objekt
            let userArray = []
            for (const user in counter) {
                const obj = {user: user, count: counter[user]}
                userArray.push(obj)
            }

            /*
             * Här kommer motsvarande array se ut som:
             * [{ user: "Bosse", count: 3 },
             *  { user: "Kerstin", count: 2 },
             *  { user: "Anna", count: 4 },
             *  { user: "Olle", count: 1 }]
             */

            // sortera objekten i vår egendefinierade ordning
            userArray.sort(userCompare)

            /*
             * Här kommer motsvarande array se ut som:
             * [{ user: "Anna", count: 4 },
             *  { user: "Bosse", count: 3 },
             *  { user: "Kerstin", count: 2 },
             *  { user: "Olle", count: 1 }]
             */

            // returnera de tre högsta i listan
            return userArray.splice(0, 3)
        }
    },
    template: `<div style="display: flex; flex-direction: column;">
                 <ul style="list-style: none; padding: 0;">
                    <li v-for="user in topTweeters">{{user.user}}: {{user.count}}</li>
                 </ul>
               </div>`
}