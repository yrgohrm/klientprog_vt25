import MyComponent from './components/MyComponent.js'

const app = {
    // nothing here in this simple app
    // but data(), methods() etc of the main
    // application goes here
}

const vueApp = Vue.createApp(app)

vueApp.component('my-component', MyComponent)

vueApp.mount("#app")
