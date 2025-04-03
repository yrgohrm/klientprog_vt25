const app = {
    data() {
        return {
            title: "En fin titel"
        }
    }
}

const vueApp = Vue.createApp(app);
vueApp.mount("#app");
