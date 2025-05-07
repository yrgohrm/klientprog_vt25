// Vi importerar vår vuex-store samt de tre komponenterna
import TopList from './components/TopList.js'
import TweetList from './components/TweetList.js'
import Twinput from './components/Twinput.js'

const app = {
    // not much to do here...
}

const vueApp = Vue.createApp(app)

vueApp.use(Pinia.createPinia())

// Vi skapar våra tre komponenter som globala komponenter
// Vi hade lika gärna kunnat lägga dem som lokala
vueApp.component('TopList', TopList)
vueApp.component('TweetList', TweetList)
vueApp.component('Twinput', Twinput)

vueApp.mount("#app")
