const app = {
    data() {
        return {
            facts: []
        }
    },
    methods: {
        async loadNewFact() {
            const resp = await fetch("https://yrgo-web-services.netlify.app/animal-facts");
            if (resp.ok) {
                const data = await resp.json();
                this.facts.unshift(data.fact);
                if (this.facts.length > 10) {
                    this.facts.length = 10;
                }
            }
        }
    },
    created() {
        for (let i = 0; i < 3; ++i) {
            this.loadNewFact();
        }
    }
}

Vue.createApp(app).mount("#app")