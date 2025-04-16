export default {
    props: {
        name: String,
        username: String,
    },
    template: `
        <div class="tweetbox">
            <h2>{{ name }} (<a href="#">@{{ username }}</a>)</h2>
            <slot></slot>
        </div>
    `
}