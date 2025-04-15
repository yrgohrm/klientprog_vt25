import TestService from '../services/TestService.js'

export default {
    data() {
        return {
            num: 0
        }
    },
    created() {
        TestService.getNum().then(num => this.num = num)
    },
    template: `<div>{{num}}</div>`
}